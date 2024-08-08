import {FeatureCardLeft} from "@/components/feature-card-left";
import {FeatureCardCenter} from "@/components/feature-card-center";


export function FeatureSection() {
	return (
		<section className="container mx-auto grid grid-cols-1 gap-6 bg-slate-50 px-12 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 dark:bg-transparent">
			<FeatureCardCenter />
			<FeatureCardCenter />
			<FeatureCardCenter />
			<FeatureCardLeft />
			<FeatureCardLeft />
			<FeatureCardLeft />
		</section>
	);
}
