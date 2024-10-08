import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";

export function SearchBar(){
	return (
		<section className="flex justify-center py-8">
			<div className="relative w-full max-w-5xl">
				<SearchIcon className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"/>
				<Input className="w-full rounded-md bg-muted px-10 py-6 text-lg focus:outline-none focus:ring-1 focus:ring-primary"
					   type="search" placeholder="Search anything..."
				/>
			</div>
		</section>
	)
}
