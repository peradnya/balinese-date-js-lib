export class Ingkel {
    public static readonly WONG = new Ingkel(0, 'Wong');
    public static readonly SATO = new Ingkel(1, 'Sato');
    public static readonly MINA = new Ingkel(2, 'Mina');
    public static readonly MANUK = new Ingkel(3, 'Manuk');
    public static readonly TARU = new Ingkel(4, 'Taru');
    public static readonly BUKU = new Ingkel(5, 'Buku');

    public static readonly lookup = [
        Ingkel.WONG,
        Ingkel.SATO,
        Ingkel.MINA,
        Ingkel.MANUK,
        Ingkel.TARU,
        Ingkel.BUKU,
    ];

    private constructor(public readonly id: number, public readonly name: string) { }
}
