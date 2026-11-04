import { CatalogPage } from "./Products";
import { womenProducts } from "../data/products";
export default function Women() { return <CatalogPage eyebrow="Women's collection" title="Made for every version of you." description="Move comfortably through training, travel, and the everyday in between." products={womenProducts} />; }
