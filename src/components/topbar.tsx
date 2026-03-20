import { UserCircleIcon } from "@heroicons/react/20/solid"
import { Cog6ToothIcon } from "@heroicons/react/20/solid"

export const Topbar = () => {
	return (
		<div className="sticky top-0 z-20 bg-black text-white flex items-center justify-between px-5 py-3 border-b border-white/10">
			<div className="flex items-center gap-3">
				<div className="h-6 w-6 rounded-md bg-white flex items-center justify-center">
					<span className="text-black font-bold text-xs">:)</span>
				</div>
				<span className="font-semibold tracking-wide text-sm">TaskBoard</span>
			</div>
			<div className="flex items-center gap-1">
				<button className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-md transition-colors">
					<Cog6ToothIcon className="h-5 w-5" />
				</button>
				<button className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-md transition-colors">
					<UserCircleIcon className="h-5 w-5" />
				</button>
			</div>
		</div>
	)
}
