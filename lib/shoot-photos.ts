/**
 * Photos from the 5 Nov 2026 shoot, keyed by Square item name. Names confirmed by Euro
 * (Euro photo names 2.csv, 20 Nov). These win over Square's older photos; once the shoot is
 * uploaded to Square this map can go. Images: 960x1200 WebP in /public/images/products.
 */
const P = (slug: string) => `/images/products/${slug}.webp`;

const BY_NAME: Record<string, string> = {
  "croissant": P("croissant"), // Blue-1
  "nutella croissant": P("nutella-croissant"), // Blue-3
  "mini nutella croissant": P("nutella-croissant"), // Blue-3
  "croissant almond": P("almond-croissant"), // Blue-5
  "pain aux raisin (escargot)": P("pain-aux-raisins"), // Blue-8
  "pistachio scroll": P("pain-pistache-cerise"), // Blue-9
  "choc croissant (pain au chocolat)": P("pain-au-chocolat"), // Blue-11
  "florentine": P("florentine"), // Blue-12
  "kouign amann": P("kouign-amann"), // Blue-13
  "cardamon bun": P("cardamom-bun"), // Blue-14
  "toastie - chicken & avocado": P("chicken-avocado-toastie"), // Blue-15
  "toastie - reuben": P("reuben"), // Blue-16
  "toastie - ham cheese tomato": P("ham-cheese-tomato"), // Blue-17
  "toastie - ham cheese": P("ham-cheese-tomato"), // Blue-17
  "toastie - cheese tomato": P("cheese-tomato"), // Blue-18
  "wraps - turkey & cranberry": P("turkey-cranberry-wrap"), // Blue-19
  "wraps - chicken & dill": P("chicken-dill-wrap"), // Blue-20
  "wraps - chicken & pesto": P("chicken-pesto-wrap"), // Blue-21
  "wraps - vegetarian": P("vegetarian-wrap"), // Blue-22
  "wraps - tuna": P("tuna-wrap"), // Blue-23
  "wrap -breakfast": P("breakfast-wrap"), // Blue-24
  "muffin - egg & bacon": P("egg-bacon-muffin"), // Blue-25
  "baguette - chèvre tomate (veg)": P("mozzarella-tomato-baguette"), // Blue-26
  "baguette - jambon-beurre (ham)": P("jambon-beurre-baguette"), // Blue-27
  "baguette - tuna niçoise": P("tuna-nicoise-baguette"), // Blue-28
  "tart strawberry": P("strawberry-tart"), // Blue-29
  "tart blueberry": P("blueberry-tart"), // Blue-30
  "tart raspberry": P("raspberry-tart"), // Blue-31
  "lemon tart": P("lemon-tart"), // Blue-32
  "cheesecake mini": P("mini-cheesecake"), // Blue-33
  "lava cake": P("mi-cuit"), // Blue-34
  "lemon meringue": P("lemon-meringue-tart"), // Blue-35
  "vanilla slice (mille-feuille)": P("millefeuille"), // Blue-36
  "carrot cake slice": P("carrot-cake"), // Blue-37
  "cheesecake berry slice": P("berry-cheesecake"), // Blue-38
  "cheesecake lemon slice": P("lemon-cheesecake"), // Blue-39
  "cheesecake slice": P("baked-cheesecake"), // Blue-40
  "eclairs chocolate": P("chocolate-eclair"), // Blue-41
  "eclairs white chocolate coconut": P("coconut-eclair"), // Blue-42
  "sausage roll mini": P("mini-sausage-roll"), // Blue-43
  "sausage roll": P("sausage-roll"), // Blue-44
  "quiche bacon": P("bacon-quiche"), // Blue-45
  "bacon quiche mini": P("bacon-quiche"), // Blue-45
  "quiche spinach": P("spinach-quiche"), // Blue-46
  "plain steak": P("plain-steak-pie"), // Blue-47
  "steak cheese": P("cheese-steak-pie"), // Blue-48
  "steak bacon": P("bacon-steak-pie"), // Blue-49
  "chicken mushroom": P("chicken-mushroom-pie"), // Blue-50
  "steak curry": P("curry-steak-pie"), // Blue-51
  "steak pepper": P("pepper-steak-pie"), // Blue-52
  "steak onion": P("onion-steak-pie"), // Blue-53
  "pasties curry veg": P("curry-vegetable-pastie"), // Blue-54
  "pasties spinach fetta": P("spinach-feta-pastie"), // Blue-55
  "pasties veggie": P("vegetarian-pastie"), // Blue-56
  "steak potato": P("potato-steak-pie"), // Blue-57
  "morning bun": P("morning-bun"), // Blue-58
  "quiche salmon": P("salmon-quiche"), // Blue-73
  "salmon quiche mini": P("salmon-quiche"), // Blue-73
  "party pie plain steak": P("plain-steak-party-pie"), // Blue-75
  "party pie steak pepper": P("pepper-steak-party-pie"), // Blue-76
  "party pie chicken mushroom": P("chicken-mushroom-party-pie"), // Blue-77
};

/** The shoot photo for a Square item name, if we have one. */
export function shootPhoto(squareName: string): string | undefined {
  return BY_NAME[squareName.trim().toLowerCase()];
}
