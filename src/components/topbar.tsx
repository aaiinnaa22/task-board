import { UserCircleIcon } from "@heroicons/react/20/solid"
import {Cog6ToothIcon} from "@heroicons/react/20/solid"

export const Topbar = () => {
	return (
		<div className="sticky top-0 bg-black text-white flex justify-between p-5 items-center">
			<h1 className="font-bold tracking-wider text-lg">TaskBoard</h1>
			<div className="flex gap-5 items-center">
				<Cog6ToothIcon className="h-6.5"/>
				<UserCircleIcon className="h-7"/>
			</div>
		</div>
	)
}