import { Plus, X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

import TodoList from "./Toddolist";

export function Popover() {

  return (
    <div>

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border bg-red-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-background"
        >
          <Plus size={20} className="text-white" />
          To-do list
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} aria-label="Fechar"  />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar tarefas
            </Dialog.Title>

            <TodoList/>
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>

      
    </div>
  );
}