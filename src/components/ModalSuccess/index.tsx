import './styles.css'
import {
  Content as ContentDialog,
  Close as CloseDialog,
  Overlay as OverlayDialog,
  Title as TitleDialog,
} from '@radix-ui/react-dialog'
import {
  Root as CollapsibleRoot,
  Trigger as CollapsibleTrigger,
  Content as CollapsibleContent,
} from '@radix-ui/react-collapsible'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'

function WarningCollapsible() {
  const [openCollapsible, setOpenCollapsible] = useState(false)
  return (
    <CollapsibleRoot
      className="mt-4"
      open={openCollapsible}
      onOpenChange={setOpenCollapsible}
    >
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium leading-tight text-base-subtitle">
          Aviso
        </span>
        <CollapsibleTrigger
          aria-checked={openCollapsible}
          className="text-purple-dark transition-transform aria-checked:-rotate-180"
        >
          <ChevronDown />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        De início essa aplição iria usar o <a href="">pagar.me</a> para
        completar o fluxo de de pagamento, so que
      </CollapsibleContent>
    </CollapsibleRoot>
  )
}

export function ModalSuccess() {
  return (
    <>
      <OverlayDialog className="fixed inset-0 bg-base-title bg-opacity-60" />
      <ContentDialog className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <CloseDialog>
          <X size={24} />
        </CloseDialog>
        <TitleDialog className="flex items-center justify-center font-ballo2 text-2xl">
          Dados enviados com sucesso
        </TitleDialog>
        <WarningCollapsible />
      </ContentDialog>
    </>
  )
}
