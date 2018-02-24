export class Jejapan {
    public static readonly MINA = new Jejapan(0, 'Mina');
    public static readonly TARU = new Jejapan(1, 'Taru');
    public static readonly SATO = new Jejapan(2, 'Sato');
    public static readonly PATRA = new Jejapan(3, 'Patra');
    public static readonly WONG = new Jejapan(4, 'Wong');
    public static readonly PAKSI = new Jejapan(5, 'Paksi');

    private constructor(public readonly id: number, public readonly name: string) { }
}
