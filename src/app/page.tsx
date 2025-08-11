import GamesShowcase from "@/components/GamesShowcase";
import Hero from "../components/Hero";
import JoinUs from "@/components/JoinUs";
import NewsletterComponent from "@/components/NewsletterComponent";

export default function Home() {
	return (
		<div className="pt-23 md:pt-25.5 lg:pt-0">
			<Hero />
			<GamesShowcase />
			<JoinUs />
			<NewsletterComponent />
		</div>
	);
}
