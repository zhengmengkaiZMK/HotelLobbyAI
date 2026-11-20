'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/components/ui/drawer';
import { useAppContext } from '@/shared/contexts/app';
import { useMediaQuery } from '@/shared/hooks/use-media-query';

import { SignInForm } from './sign-in-form';
import { SignUpForm } from './sign-up-form';

/**
 * iOS Safari (and Chrome-on-iOS, same WebKit) does not shrink the layout
 * viewport when the software keyboard opens, so a bottom-anchored fixed
 * drawer stays pinned behind the keyboard. vaul's built-in
 * repositionInputs logic double-compensates with Safari's own visual
 * viewport scroll and throws the focused input out of view (the drawer
 * content scrolls up, then the pull gesture only dismisses the keyboard).
 *
 * Fix: disable vaul's repositioning and instead measure the keyboard via
 * window.visualViewport (resize/scroll) and lift the drawer with a bottom
 * margin so the whole form stays visible above the keyboard.
 */
function useKeyboardAvoidHeight(active: boolean) {
  const [kbHeight, setKbHeight] = useState(0);

  useEffect(() => {
    if (!active) return;
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      // keyboard (incl. quickbar) = layout viewport height minus the
      // visible visual viewport height, minus any offset Safari scrolled
      // the visual viewport by. A threshold keeps URL-bar collapse
      // (~60-100px) from being mistaken for a keyboard.
      const overlap = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      setKbHeight(overlap > 150 ? overlap : 0);
    };

    update();
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    return () => {
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
    };
  }, [active]);

  return kbHeight;
}

export function SignModal({ callbackUrl = '/' }: { callbackUrl?: string }) {
  const t = useTranslations('common.sign');
  const { isShowSignModal, setIsShowSignModal } = useAppContext();
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');

  const isDesktop = useMediaQuery('(min-width: 768px)');

  // mobile drawer: measure the keyboard so the form rides above it
  const kbHeight = useKeyboardAvoidHeight(!isDesktop);

  const handleOpenChange = (open: boolean) => {
    setIsShowSignModal(open);
    if (!open) {
      setMode('sign-in');
    }
  };

  const title =
    mode === 'sign-in' ? t('sign_in_title') : t('sign_up_title');
  const description =
    mode === 'sign-in' ? t('sign_in_description') : t('sign_up_description');

  const formContent =
    mode === 'sign-in' ? (
      <SignInForm
        callbackUrl={callbackUrl}
        onSwitchToSignUp={() => setMode('sign-up')}
      />
    ) : (
      <SignUpForm
        callbackUrl={callbackUrl}
        onSwitchToSignIn={() => setMode('sign-in')}
      />
    );

  if (isDesktop) {
    return (
      <Dialog open={isShowSignModal} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {formContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={isShowSignModal}
      onOpenChange={handleOpenChange}
      repositionInputs={false}
    >
      <DrawerContent
        style={
          kbHeight > 0
            ? {
                marginBottom: kbHeight,
                // keep the sheet inside the visible area above the keyboard
                maxHeight: `calc(80vh - ${kbHeight}px)`,
              }
            : undefined
        }
      >
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {mode === 'sign-in' ? (
          <SignInForm
            callbackUrl={callbackUrl}
            className="mt-8 px-4"
            onSwitchToSignUp={() => setMode('sign-up')}
          />
        ) : (
          <SignUpForm
            callbackUrl={callbackUrl}
            className="mt-8 px-4"
            onSwitchToSignIn={() => setMode('sign-in')}
          />
        )}
        <DrawerFooter className="pt-4">
          <DrawerClose asChild>
            <Button variant="outline">{t('cancel_title')}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
