export interface Good {
    id: string;
    name: string;
    price: string;
    rating: string;
    img_src: string;
    labels: string[];
    new_label?: boolean;
    hit_label?: boolean;
}