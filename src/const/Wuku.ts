export class Wuku {
    public static readonly SINTA        = new Wuku( 0, 7, 'Sinta');
    public static readonly LANDEP       = new Wuku( 1, 1, 'Landep');
    public static readonly UKIR         = new Wuku( 2, 4, 'Ukir');
    public static readonly KULANTIR     = new Wuku( 3, 6, 'Kulantir');
    public static readonly TOLU         = new Wuku( 4, 5, 'Tolu');
    public static readonly GUMBREG      = new Wuku( 5, 8, 'Gumbreg');
    public static readonly WARIGA       = new Wuku( 6, 9, 'Wariga');
    public static readonly WARIGADEAN   = new Wuku( 7, 3, 'Warigadean');
    public static readonly JULUNGWANGI  = new Wuku( 8, 7, 'Julungwangi');
    public static readonly SUNGSANG     = new Wuku( 9, 1, 'Sungsang');
    public static readonly DUNGULAN     = new Wuku(10, 4, 'Dungulan');
    public static readonly KUNINGAN     = new Wuku(11, 6, 'Kuningan');
    public static readonly LANGKIR      = new Wuku(12, 5, 'Langkir');
    public static readonly MEDANGSIA    = new Wuku(13, 8, 'Medangsia');
    public static readonly PUJUD        = new Wuku(14, 9, 'Pujut');
    public static readonly PAHANG       = new Wuku(15, 3, 'Pahang');
    public static readonly KRULUT       = new Wuku(16, 7, 'Krulut');
    public static readonly MERAKIH      = new Wuku(17, 1, 'Merakih');
    public static readonly TAMBIR       = new Wuku(18, 4, 'Tambir');
    public static readonly MEDANGKUNGAN = new Wuku(19, 6, 'Medangkungan');
    public static readonly MATAL        = new Wuku(20, 5, 'Matal');
    public static readonly UYE          = new Wuku(21, 8, 'Uye');
    public static readonly MENAIL       = new Wuku(22, 9, 'Menail');
    public static readonly PRANGBAKAT   = new Wuku(23, 3, 'Prangbakat');
    public static readonly BALA         = new Wuku(24, 7, 'Bala');
    public static readonly UGU          = new Wuku(25, 1, 'Ugu');
    public static readonly WAYANG       = new Wuku(26, 4, 'Wayang');
    public static readonly KLAWU        = new Wuku(27, 6, 'Klawu');
    public static readonly DUKUT        = new Wuku(28, 5, 'Dukut');
    public static readonly WATUGUNUNG   = new Wuku(29, 8, 'Watugunung');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
