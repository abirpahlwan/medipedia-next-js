import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";
import {Icons} from "@/components/icons";

export function FeatureCardCenter() {
	return (
		<Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
              <Icons.heartpulse className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Healthcare</h3>
              <p className="text-center text-muted-foreground">
                Explore a wide range of healthcare services and information.
              </p>
            </CardContent>
          </Card>
	);
}
