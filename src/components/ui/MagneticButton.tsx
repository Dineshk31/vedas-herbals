import { useRef, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

interface MagneticButtonProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  strength?: number;
  [key: string]: unknown;
}

export function MagneticButton({
  children,
  as: Component = "button",
  className = "",
  strength = 0.35,
  ...rest
}: MagneticButtonProps & Omit<ComponentPropsWithoutRef<"button">, "as">) {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const MotionComponent = motion.create(Component as ElementType);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
