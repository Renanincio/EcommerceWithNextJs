"use client"

import * as Popover from "@radix-ui/react-popover";
import "./style.css";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { useRouter } from "next/navigation";

export const UserButton = () => {
    const { user, logout } = useAuthStore();
    const router = useRouter();

    const redirect = () => {
        router.push("/me");
    }


    return(
    <>
	{
        user?.name ? <Popover.Root>
		<Popover.Trigger asChild>
        <p className="PopoverTrigger cursor-pointer">Olá, {user.name.split(" ")[0]}</p>
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="PopoverContent mt-2 shadow-md" sideOffset={5}>
				<ul className="gap-8">
                    <li onClick={redirect} className="cursor-pointer">Meu perfil</li>
                    <li onClick={logout} className="cursor-pointer">Sair</li>
                </ul>
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root> : null
    }
    </>
    )
};

