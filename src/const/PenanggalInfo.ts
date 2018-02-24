export class PenanggalInfo {
    public static readonly TILEM = new PenanggalInfo(0, 'Tilem');
    public static readonly PENANGGAL = new PenanggalInfo(1, 'Penanggal');
    public static readonly PURNAMA = new PenanggalInfo(2, 'Purnama');
    public static readonly PANGELONG = new PenanggalInfo(3, 'Pangelong');

    private constructor(
        public readonly id: number,
        public readonly name: string) { }
}