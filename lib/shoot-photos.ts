/**
 * Photos from the 5 Nov 2026 studio shoot (blue backdrop), keyed by Square item name.
 *
 * Temporary: the photographer's files came numbered, not named, so these pairings are our
 * best guess until Euro confirms the names (Euro photo names.xlsx). These win over Square's
 * older photos so the menu looks consistent; once the shoot is uploaded to Square, this map can go.
 *
 * Source files: "E:\Starky\____\03 EURO\Exports Blue Background" (Blue-1 … Blue-77), cropped
 * to 4:5 and resized to 960×1200 WebP in /public/images/products.
 */
const P = (slug: string) => `/images/products/${slug}.webp`;

const BY_NAME: Record<string, string> = {
  // Viennoiserie
  "croissant": P("croissant"), // Blue-1
  "croissant - mini": P("croissant-cut"), // Blue-2
  "hazelnut praline croissant": P("hazelnut-praline-croissant"), // Blue-3
  "nutella croissant": P("nutella-croissant-cut"), // Blue-4
  "croissant almond": P("almond-croissant"), // Blue-5
  "croissant carrot cake almond": P("croissant-carrot-cake-almond"), // Blue-6
  "gluten free cookie (choc chip pecan)": P("choc-chip-cookie"), // Blue-7
  "pain aux raisin (escargot)": P("pain-aux-raisins"), // Blue-8
  "pistachio scroll": P("pistachio-scroll"), // Blue-9
  "parmesan twist": P("parmesan-twist"), // Blue-10
  "choc croissant (pain au chocolat)": P("pain-au-chocolat"), // Blue-11
  "florentine": P("florentine"), // Blue-12
  "kouign amann": P("kouign-amann"), // Blue-13
  "cardamon bun": P("cardamom-bun"), // Blue-14

  // Toasties, wraps, baguettes
  "toastie - chicken & avocado": P("toastie-chicken-avocado"), // Blue-15
  "toastie - reuben": P("toastie-reuben"), // Blue-16
  "toastie - ham cheese tomato": P("toastie-ham-cheese-tomato"), // Blue-17
  "toastie - ham cheese": P("toastie-ham-cheese-tomato"), // Blue-17
  "toastie - cheese tomato": P("toastie-cheese-tomato"), // Blue-18
  "wraps - chicken & pesto": P("wrap-chicken-pesto"), // Blue-19
  "wraps - chicken & dill": P("wrap-chicken-dill"), // Blue-20
  "wraps - turkey & cranberry": P("wrap-turkey-cranberry"), // Blue-21
  "wraps - mediterranean": P("wrap-mediterranean"), // Blue-22
  "wraps - vegetarian": P("wrap-mediterranean"), // Blue-22
  "wraps - chicken schnitzel": P("wrap-chicken-schnitzel"), // Blue-23
  "wraps - house made schnitzel": P("wrap-chicken-schnitzel"), // Blue-23
  "wraps - bacon and egg": P("wrap-bacon-egg"), // Blue-24
  "muffin - egg & bacon": P("muffin-egg-bacon"), // Blue-25
  "baguette - chèvre tomate (veg)": P("baguette-chevre-tomate"), // Blue-26
  "baguette - jambon-beurre (ham)": P("baguette-jambon-beurre"), // Blue-27
  "baguette - tuna niçoise": P("baguette-tuna-nicoise"), // Blue-28

  // Cakes & slices
  "tart strawberry": P("tart-strawberry"), // Blue-29
  "tart blueberry": P("tart-blueberry"), // Blue-30
  "tart raspberry": P("tart-raspberry"), // Blue-31
  "lemon tart": P("lemon-tart"), // Blue-32
  "cheesecake mini": P("cheesecake-mini"), // Blue-33
  "flourless choc cake": P("flourless-choc-cake"), // Blue-34
  "lava cake": P("flourless-choc-cake"), // Blue-34
  "lemon meringue": P("lemon-meringue"), // Blue-35
  "vanilla slice (mille-feuille)": P("vanilla-slice"), // Blue-36
  "carrot cake slice": P("carrot-cake-slice"), // Blue-37
  "cheesecake berry slice": P("cheesecake-berry-slice"), // Blue-38
  "cheesecake lemon slice": P("cheesecake-lemon-slice"), // Blue-39
  "cheesecake slice": P("cheesecake-slice"), // Blue-40
  "eclairs chocolate": P("eclair-chocolate"), // Blue-41
  "eclairs white chocolate coconut": P("eclair-white-choc-coconut"), // Blue-42

  // Pies, rolls, pasties, quiche
  "sausage roll mini": P("sausage-roll-mini"), // Blue-43
  "sausage roll": P("sausage-roll"), // Blue-44
  "quiche bacon": P("quiche-bacon"), // Blue-45
  "bacon quiche mini": P("quiche-bacon"), // Blue-45
  "quiche spinach": P("quiche-spinach"), // Blue-46
  "plain steak": P("pie-plain-steak"), // Blue-47
  "steak cheese": P("pie-steak-cheese"), // Blue-48
  "steak bacon": P("pie-steak-bacon"), // Blue-49
  "chicken mushroom": P("pie-chicken-mushroom"), // Blue-50
  "steak mushroom": P("pie-steak-mushroom"), // Blue-51
  "steak pepper": P("pie-steak-pepper"), // Blue-52
  "steak onion": P("pie-steak-onion"), // Blue-53
  "pasties spinach fetta": P("pasty-spinach-fetta"), // Blue-54
  "pasties curry veg": P("pasty-curry-veg"), // Blue-55
  "pasties veggie": P("pasty-veggie"), // Blue-56
  "steak potato": P("pie-steak-potato"), // Blue-57
  "party pie plain steak": P("party-pie-plain-steak"), // Blue-73
  "party pie chicken mushroom": P("party-pie-chicken-mushroom"), // Blue-75
  "party pie steak pepper": P("party-pie-steak-pepper"), // Blue-76
};

/** The shoot photo for a Square item name, if we have one. */
export function shootPhoto(squareName: string): string | undefined {
  return BY_NAME[squareName.trim().toLowerCase()];
}
