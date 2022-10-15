import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
  error?: boolean;
}

// div que fica em volta
function TextInputRoot({ children, error = false }: TextInputRootProps) {
  return (
    <div className={
      clsx("flex items-center px-3 gap-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300", {
        "ring-2 ring-red-200": error
      })}>
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputDefaultProps extends InputHTMLAttributes<HTMLInputElement> { }

// DEFAULT - apenas o input
function TextInputDefault({ ...props }: TextInputDefaultProps) {
  return (
    <input
      className='bg-transparent flex-1 py-4 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  );
}

TextInputDefault.displayName = 'TextInput.Default'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputDefault,
  Icon: TextInputIcon
}
