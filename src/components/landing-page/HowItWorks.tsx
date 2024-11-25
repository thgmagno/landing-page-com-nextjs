import Image from "next/image";

export function HowItWorks() {
    return (
        <div>
            <Image src="/assets/how-it-works.svg" alt="Como funciona" width={700} height={700} />
        </div>
    );
}