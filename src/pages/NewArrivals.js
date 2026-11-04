import { CatalogPage } from "./Products";
import { newArrivals } from "../data/products";
export default function NewArrivals() { return <CatalogPage eyebrow="Just in" title="New energy, just landed." description="Meet the latest arrivals designed to keep your rotation moving forward." products={newArrivals} />; }
