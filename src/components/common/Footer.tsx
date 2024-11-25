import Image from "next/image";

export function Footer() {
    return (
        <div className="flex items-center justify-center gap-4 flex-col py-16">
            <Image src="/assets/logo.svg" alt="LivroSaaS" width={160} height={160} />
            <span className="text-sm text-muted-foreground">© 2024 LivroSaaS. Todos os direitos reservados.</span>
        </div>
    );
}