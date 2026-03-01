import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from '../components/ThemeProvider';

export function Home() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center animate-fade-in px-4 sm:px-8">
        <div className="relative z-10 text-center max-w-4xl px-4">
          {/* Логотип */}
          <div className="flex justify-center overflow-visible items-center w-full mb-6 sm:mb-8 text-[#333333] dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1450 795"
              preserveAspectRatio="xMinYMid meet"
              className="w-full h-auto"
              fill="none"
            >
              <path d="M3 717V791.5H11.5V757.5L42.5 791.5H52.5L15 751L50.5 717H39.5L11.5 744.5V717H3Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M224.5 791.5V717.5H247.774C262.629 717.5 270.145 725.5 270.437 736.5C270.728 747.5 263.5 756.5 247.774 756.5H232V791.5H224.5ZM232 750V724.5H247.774C258.273 724.5 263.342 730.5 263.126 737.5C262.91 744.5 258 750 247.774 750H232Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M440.5 791.5L476 716.5L511 791.5H503L491.5 767.5H460L448.5 791.5H440.5ZM463.5 760L476 734.5L488 760H463.5Z" fill="currentColor" stroke="currentColor" />
              <path d="M751.915 731.301C749.027 727.572 746.361 724.851 743.915 722.995C741.021 720.926 738.308 719.38 735.773 718.301C733.401 717.14 731.112 716.427 728.915 716.111C670.915 707.746 662.915 787.99 716.415 793.562C722.016 794.145 728.804 793.334 736.915 790.721C741.448 788.883 746.457 785.227 751.915 779.301L745.915 774.801C737.915 783.301 734.415 785.801 720.415 787.105C695.567 786.101 686.163 766.597 688.985 749.301C690.429 742.984 693.126 736.997 697.147 732.301C704.915 725.301 710.915 722.755 721.415 722.755C732.957 722.755 737.216 726.865 745.915 735.801L751.915 731.301Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M960.844 715.5C948.158 717.509 939.638 722.177 934.344 728.291C927.24 736.494 924.5 745 924.5 756C924.5 770.5 932.292 782.38 944.844 789.225C949.692 792.153 955.132 793.898 960.844 794C974.192 794.238 984.486 789.003 991.344 781.132C998.863 772.5 1001.34 765.01 1001.34 754C1001.34 741.5 998.945 734.276 990.344 726C982.844 718.784 975.344 715.5 963.844 715.5H960.844ZM961.844 786.5C958.082 786.728 954.748 786.066 951.844 784.715C948.449 783.285 945.586 781.332 943.223 779C940.279 776.619 937.973 773.911 936.245 771C932.612 764.878 931.875 758.805 932.844 752C934.654 736.5 943.844 725 960.844 723.5C973.344 724 978.844 725.5 988.344 736C992.604 740.708 995.844 755 991.344 768.5C989.881 772.887 986.344 778 978.844 782.383C975.049 784.808 970.311 786.5 964.344 786.5H961.844Z" fill="currentColor" stroke="currentColor" />
              <path d="M1171.5 717.5H1212V724.5H1195.5V791.5H1188V724.5H1171.5V717.5Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1383.5 717.5V791.5H1404.5C1421.5 791.5 1430.73 784.074 1430.73 771.5C1430.73 759 1426.5 749.5 1404.5 749.5H1391V717.5H1383.5ZM1391 784.5V756.5H1408C1418.5 756.5 1423 763.5 1423 771C1423 778 1416.11 784.5 1408 784.5H1391Z" fill="currentColor" stroke="currentColor" />
              <path d="M1439 717.5V791.5H1446.5V717.5H1439Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0.5 187.5V207.5H47.5V588.5H1V608.5H187.5V588.5H138.5V393.5C165.13 391.563 181.665 394.226 192.5 399.689C204.043 405.508 209 414.5 213.037 424.5C217.074 434.5 220.194 449.39 222.605 499.5C224 528.5 225.5 552.5 242.535 576.5C245.751 580.598 249.451 584.381 253.738 588.5C286.624 616.859 338.925 617.686 379.5 594.5V570.5C367.273 577.279 357.403 580.195 349.292 580.023C342.873 580.221 337.882 578.783 333.957 576C325.5 570.002 327 567 323.895 501.5C323.417 489.858 322.015 477.543 318.542 465C311.205 438.497 293.906 412.823 254 394.745C244.903 390.623 234.503 387.161 222.605 384.5C274.5 376.5 310.5 362.5 334.864 322.5C348.231 293.52 346.01 258.625 323.596 232C297.5 201 274.5 187.5 176 187.5H0.5ZM185.5 207H139L138.5 373.5H185.5C200.053 372.604 213 368 221.5 361.294C224.934 358.694 228.143 354.316 231 348.656C233.942 341.318 236.864 333 238 324C239.136 315 240.205 283 238 255C236.634 244.922 234.46 236.211 231 229.5C227.829 224.485 224.687 219.752 220 216.547C210.5 211 204 208 185.5 207Z" fill="currentColor" stroke="currentColor" />
              <path d="M378 187.5V207H426.5V470C426.5 489.5 427 506 430.939 526C448.707 602.827 513.765 612.605 564 614.47C609.159 616.147 643.121 607.456 667 589.36C704.5 560.944 710 530.5 711.5 470V226.5C713 211 717.5 207.5 744.5 207.17C748.495 207.121 752.974 207 758 207V187.5H640.5V207.5H667C687.5 207.5 691.5 209.5 691.5 231.5V465.5C692 545 663.5 588.691 595 588.691C539 588 514.905 551.384 517.5 465.5V207.5H569V187.5H378Z" fill="currentColor" stroke="currentColor" />
              <path d="M779.5 187.5H1086L1088.5 325H1071C1067.85 313.343 1064.1 269.726 1041.5 239.053C1036.95 232.641 1032.32 227.325 1027.33 223C1014.77 212.11 1006.5 207.5 978.5 207.5V588.5H1034.5V608H831.5V588.407H887.5V207.5H876.5C868.5 207.5 849.173 210.5 835.044 225.5C815.5 246.249 804.5 271.5 794.5 325.5H776.5L779.5 187.5Z" fill="currentColor" stroke="currentColor" />
              <path d="M1139.5 318.5V187.5H1441V205.5L1227.5 588.5H1296C1346 588.5 1369.5 570.5 1400.54 513C1408.18 496.544 1415.29 476.873 1422 453.5H1445.5L1443.5 608.5H1125.5V583.5L1335 207.5H1259.5C1237 208 1222 209.5 1202 225.966C1184.88 241.206 1172.38 268.733 1162 318.5H1139.5Z" fill="currentColor" stroke="currentColor" />
              <path d="M3.5 77.5V3.5H55V77.5H48V10.5H10.5V77.5H3.5Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M130.5 77.5V3.5H153.774C168.629 3.5 176.145 11.5 176.437 22.5C176.728 33.5 169.5 42.5 153.774 42.5H138V77.5H130.5ZM138 36V10.5H153.774C164.273 10.5 169.342 16.5 169.126 23.5C168.91 30.5 164 36 153.774 36H138Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M282 1C269.314 3.00859 260.794 7.677 255.5 13.7907C248.396 21.9936 245.656 30.5 245.656 41.5C245.656 56 253.448 67.8797 266 74.7246C270.848 77.6526 276.289 79.398 282 79.5C295.348 79.7384 305.642 74.5034 312.5 66.6316C320.02 58 322.5 50.5098 322.5 39.5C322.5 27 320.101 19.7761 311.5 11.5C304 4.28366 296.5 1 285 1H282ZM283 72C279.238 72.228 275.904 71.5657 273 70.2145C269.606 68.7848 266.742 66.8322 264.379 64.5C261.435 62.1192 259.129 59.4107 257.401 56.5C253.768 50.3785 253.031 44.3045 254 37.5C255.81 22 265 10.5 282 9C294.5 9.5 300 11 309.5 21.5C313.76 26.2081 317 40.5 312.5 54C311.038 58.3872 307.5 63.5 300 67.8835C296.205 70.308 291.467 72 285.5 72H283Z" fill="currentColor" stroke="currentColor" />
              <path d="M463 16.9997C460.112 13.2713 457.447 10.5503 455 8.69434C452.106 6.62474 449.393 5.07896 446.858 3.99993C444.487 2.8392 442.197 2.12645 440 1.80957C382 -6.55494 374 73.6889 427.5 79.2606C433.102 79.844 439.889 79.033 448 76.4205C452.533 74.5815 457.542 70.9254 463 64.9997L457 60.5C449 69 445.5 71.5 431.5 72.8038C406.653 71.7995 397.248 52.2956 400.071 35C401.515 28.6835 404.212 22.6961 408.232 18C416 11 422 8.45381 432.5 8.45381C444.043 8.45381 448.301 12.5642 457 21.5L463 16.9997Z" fill="currentColor" stroke="currentColor" />
              <path d="M528 3.5H568.5V10.5H552V77.5H544.5V10.5H528V3.5Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M636.5 77.5V3.5H659.774C674.629 3.5 682.145 11.5 682.437 22.5C682.728 33.5 675.5 42.5 659.774 42.5H644V77.5H636.5ZM644 36V10.5H659.774C670.272 10.5 675.341 16.5 675.126 23.5C674.91 30.5 670 36 659.774 36H644Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M748 77L783.5 2L818.5 77H810.5L799 53H767.5L756 77H748ZM771 45.5L783.5 20L795.5 45.5H771Z" fill="currentColor" stroke="currentColor" />
              <path d="M887.5 3.5H894.5V34.5H932V3.5H939.5V77.5H932V41.5H894.5V77.5H887.5V3.5Z" fill="currentColor" stroke="currentColor" />
              <path d="M1082.91 17.3007C1080.03 13.5723 1077.36 10.8513 1074.91 8.99537C1072.02 6.92576 1069.31 5.37998 1066.77 4.30095C1064.4 3.14022 1062.11 2.42747 1059.91 2.11059C1001.91 -6.25391 993.915 73.99 1047.41 79.5617C1053.02 80.145 1059.8 79.334 1067.91 76.7215C1072.45 74.8826 1077.46 71.2265 1082.91 65.3007L1076.91 60.801C1068.91 69.301 1065.41 71.801 1051.41 73.1048C1026.57 72.1005 1017.16 52.5966 1019.99 35.301C1021.43 28.9845 1024.13 22.9971 1028.15 18.301C1035.91 11.301 1041.91 8.75483 1052.41 8.75483C1063.96 8.75483 1068.22 12.8652 1076.91 21.801L1082.91 17.3007Z" fill="currentColor" stroke="currentColor" />
              <path d="M1147.5 3.5H1188V10.5H1171.5V77.5H1164V10.5H1147.5V3.5Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1256.5 3.5V77.5H1280C1292.5 76 1299.49 68 1300 56.5C1300.36 48.5073 1295.5 39.5 1285 37C1292 33.5 1295 27.5 1294.5 19.5C1293 10.5 1288 4 1276 3.5H1256.5ZM1263.5 34.5V10.5H1274C1282 11 1285.97 15 1286.34 22C1286.63 27.5 1282.5 34 1274 34.5H1263.5ZM1263.5 70.5V42H1278.5C1286.5 42 1292.28 49.5 1292.28 57C1292.28 63.0074 1288 69 1278.5 70.5H1263.5Z" fill="currentColor" stroke="currentColor" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1404.84 0.5C1392.16 2.50859 1383.64 7.177 1378.34 13.2907C1371.24 21.4936 1368.5 30 1368.5 41C1368.5 55.5 1376.29 67.3797 1388.84 74.2246C1393.69 77.1526 1399.13 78.898 1404.84 79C1418.19 79.2384 1428.49 74.0034 1435.34 66.1316C1442.86 57.5 1445.34 50.0098 1445.34 39C1445.34 26.5 1442.95 19.2761 1434.34 11C1426.84 3.78366 1419.34 0.5 1407.84 0.5H1404.84ZM1405.84 71.5C1402.08 71.728 1398.75 71.0657 1395.84 69.7145C1392.45 68.2848 1389.59 66.3322 1387.22 64C1384.28 61.6192 1381.97 58.9107 1380.25 56C1376.61 49.8785 1375.87 43.8045 1376.84 37C1378.65 21.5 1387.84 10 1404.84 8.5C1417.34 9 1422.84 10.5 1432.34 21C1436.6 25.7081 1439.84 40 1435.34 53.5C1433.88 57.8872 1430.34 63 1422.84 67.3835C1419.05 69.808 1414.31 71.5 1408.34 71.5H1405.84Z" fill="currentColor" stroke="currentColor" />
            </svg>
          </div>

          <Button
            asChild
            variant="outline"
            className="
              border-foreground
              text-foreground
              bg-background
              dark:border-primary-foreground
              dark:text-primary-foreground
              dark:bg-transparent
              hover:bg-foreground/10
              dark:hover:bg-primary-foreground/10
              px-8 sm:px-12 
              py-5 sm:py-7 
              text-xs sm:text-sm 
              uppercase 
              tracking-[0.15em]
              transition-luxury
              mt-12
            "
          >
            <Link to="/about">Узнать больше</Link>
          </Button>
        </div>
      </section>


      {/* Services Preview */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-b divider-thin">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-[0.03em] text-primary">Наши услуги</h2>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
              Полный спектр премиальных услуг для создания вашего совершенного образа
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <Link to="/services" className="group hover-lift">
              <div className="gallery-frame overflow-hidden mb-4 sm:mb-6 h-64 sm:h-80 md:h-96">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </div>
              <h3 className="serif text-2xl sm:text-3xl mb-2 sm:mb-3 tracking-[0.02em] text-primary">Парикмахерское искусство</h3>
              <p className="text-secondary mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Стрижки, окрашивание, укладки от ведущих мастеров
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.12em] small-caps text-primary">
                Подробнее <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 icon-ultra-thin" strokeWidth={0.75} />
              </div>
            </Link>

            <Link to="/services" className="group hover-lift">
              <div className="gallery-frame overflow-hidden mb-4 sm:mb-6 h-64 sm:h-80 md:h-96">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </div>
              <h3 className="serif text-2xl sm:text-3xl mb-2 sm:mb-3 tracking-[0.02em] text-primary">Уход за лицом</h3>
              <p className="text-secondary mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                Эксклюзивные процедуры с использованием премиальной косметики
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.12em] small-caps text-primary">
                Подробнее <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 icon-ultra-thin" strokeWidth={0.75} />
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-primary text-primary-foreground px-8 sm:px-12 py-5 sm:py-7 text-xs sm:text-sm uppercase tracking-[0.15em]"
            >
              <Link to="/services">Посмотреть услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-[0.03em]">Портфолио</h2>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
              Каждая работа — произведение искусства
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {['', '', ''].map((src, i) => (
              <Link
                key={i}
                to="/portfolio"
                className="group gallery-frame overflow-hidden aspect-square hover-lift"
              >
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover grayscale-luxury"
                />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary px-8 sm:px-12 py-5 sm:py-7 text-xs sm:text-sm uppercase tracking-[0.15em]"
            >
              <Link to="/portfolio">Смотреть портфолио</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-b divider-thin">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <p className="serif text-xl sm:text-2xl md:text-3xl italic mb-6 sm:mb-8 leading-relaxed tracking-[0.02em] text-primary">
            «Это не просто салон красоты — это место, где понимают искусство создания
            идеального образа. Каждый визит — это настоящий опыт роскоши и заботы.»
          </p>
          <div className="text-xs uppercase tracking-[0.15em] text-tertiary small-caps mb-6 sm:mb-0">
            Елена Соколова, постоянный клиент
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm uppercase tracking-[0.12em] small-caps text-primary"
          >
            Все отзывы <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 icon-ultra-thin" strokeWidth={0.75} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 tracking-[0.03em] text-primary">Готовы начать?</h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Запишитесь на консультацию и откройте для себя новый уровень ухода за собой
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground px-10 sm:px-14 md:px-16 py-6 sm:py-7 md:py-8 text-xs sm:text-sm uppercase tracking-[0.15em]"
          >
            <Link to="/contacts">Записаться</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}