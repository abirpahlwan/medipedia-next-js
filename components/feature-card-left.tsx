import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Icons} from "@/components/icons";

export function FeatureCardLeft() {
	return (
		<Card>
			<div className="relative overflow-hidden rounded-lg border bg-background p-2">
				<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
					<Icons.planetscale className="h-12 w-12 text-primary" />
					<div className="space-y-2">
						<h3 className="font-bold">Database</h3>
						<p className="text-sm text-muted-foreground">
							ORM using Prisma and deployed on PlanetScale.
						</p>
					</div>
				</div>
			</div>
		</Card>
	);
}
