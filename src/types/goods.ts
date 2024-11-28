export interface Good {
    id: string;
    name: string;
    price: string;
    rating: string;
    img_src: string;
    new_label?: boolean | null;
    hit_label?: boolean | null;
    type?: string[] | null;
    color?: string[] | null;
}
