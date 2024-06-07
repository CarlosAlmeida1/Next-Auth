"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  asChild,
  children,
  mode = "redirect",
}: LoginButtonProps) {
  const router = useRouter();

  const onlick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: implementar modal</span>;
  }

  return (
    <span onClick={onlick} className="cursosp cursor-pointer">
      {children}
    </span>
  );
}
