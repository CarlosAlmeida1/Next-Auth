import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Algo de errado aconteceu"
      backButtonHref="/auth/login"
      backButtonLabel="Voltar para login"
    >
      <div>
        <ExclamationTriangleIcon className="justify-center flex w-full items-center size-5 text-destructive" />
      </div>
    </CardWrapper>
  );
}
