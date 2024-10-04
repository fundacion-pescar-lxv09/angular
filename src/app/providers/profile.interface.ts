export type UUID = `${string}-${string}-${string}-${string}-${string}`
export interface Login {
    uuid?:     UUID;
    username?: string;
    password?: string;
    salt?:     string;
    md5?:      string;
    sha1?:     string;
    sha256?:   string;
}
export interface Picture {
    large?:     string;
    medium?:    string;
    thumbnail?: string;
}