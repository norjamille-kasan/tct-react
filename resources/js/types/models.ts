export type Paginate<T> = {
    data: T[];
    links: Link[];
    meta: Meta;
};

export type Link = {
    url: string | null;
    label: string;
    active: boolean;
};

type Meta = {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

// -----------------------------------------

export type Company = {
    id: number;
    name: string;
    is_active: boolean;
    created_at: string | null;
    updated_at: string | null;
};
