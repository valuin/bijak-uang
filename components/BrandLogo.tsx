import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

const BrandLogo: React.FC<IconProps> = ({}) => {
  return (
    <svg width="89" height="60" viewBox="0 0 89 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.44 55V40.1H4.04L9.62 47.68H8.38L13.84 40.1H16.44V55H13.7V43.2L14.76 43.46L9.1 51H8.78L3.26 43.46L4.16 43.2V55H1.44ZM24.3916 55.24C23.3249 55.24 22.3516 54.9933 21.4716 54.5C20.6049 54.0067 19.9116 53.3333 19.3916 52.48C18.8849 51.6267 18.6316 50.6533 18.6316 49.56C18.6316 48.4667 18.8849 47.4933 19.3916 46.64C19.9116 45.7867 20.6049 45.1133 21.4716 44.62C22.3382 44.1267 23.3116 43.88 24.3916 43.88C25.4582 43.88 26.4249 44.1267 27.2916 44.62C28.1582 45.1133 28.8449 45.7867 29.3516 46.64C29.8716 47.48 30.1316 48.4533 30.1316 49.56C30.1316 50.6533 29.8716 51.6267 29.3516 52.48C28.8316 53.3333 28.1382 54.0067 27.2716 54.5C26.4049 54.9933 25.4449 55.24 24.3916 55.24ZM24.3916 52.84C24.9782 52.84 25.4916 52.7 25.9316 52.42C26.3849 52.14 26.7382 51.7533 26.9916 51.26C27.2582 50.7533 27.3916 50.1867 27.3916 49.56C27.3916 48.92 27.2582 48.36 26.9916 47.88C26.7382 47.3867 26.3849 47 25.9316 46.72C25.4916 46.4267 24.9782 46.28 24.3916 46.28C23.7916 46.28 23.2649 46.4267 22.8116 46.72C22.3582 47 21.9982 47.3867 21.7316 47.88C21.4782 48.36 21.3516 48.92 21.3516 49.56C21.3516 50.1867 21.4782 50.7533 21.7316 51.26C21.9982 51.7533 22.3582 52.14 22.8116 52.42C23.2649 52.7 23.7916 52.84 24.3916 52.84ZM32.1184 55V44.12H34.5784V46.26L34.3784 45.88C34.6318 45.2267 35.0451 44.7333 35.6184 44.4C36.2051 44.0533 36.8851 43.88 37.6584 43.88C38.4584 43.88 39.1651 44.0533 39.7784 44.4C40.4051 44.7467 40.8918 45.2333 41.2384 45.86C41.5851 46.4733 41.7584 47.1867 41.7584 48V55H39.1384V48.62C39.1384 48.14 39.0451 47.7267 38.8584 47.38C38.6718 47.0333 38.4118 46.7667 38.0784 46.58C37.7584 46.38 37.3784 46.28 36.9384 46.28C36.5118 46.28 36.1318 46.38 35.7984 46.58C35.4651 46.7667 35.2051 47.0333 35.0184 47.38C34.8318 47.7267 34.7384 48.14 34.7384 48.62V55H32.1184ZM49.1339 55.24C48.0139 55.24 47.0339 54.9867 46.1939 54.48C45.3539 53.9733 44.7006 53.2867 44.2339 52.42C43.7672 51.5533 43.5339 50.5933 43.5339 49.54C43.5339 48.4467 43.7672 47.48 44.2339 46.64C44.7139 45.7867 45.3606 45.1133 46.1739 44.62C47.0006 44.1267 47.9206 43.88 48.9339 43.88C49.7872 43.88 50.5339 44.02 51.1739 44.3C51.8272 44.58 52.3806 44.9667 52.8339 45.46C53.2872 45.9533 53.6339 46.52 53.8739 47.16C54.1139 47.7867 54.2339 48.4667 54.2339 49.2C54.2339 49.3867 54.2206 49.58 54.1939 49.78C54.1806 49.98 54.1472 50.1533 54.0939 50.3H45.6939V48.3H52.6139L51.3739 49.24C51.4939 48.6267 51.4606 48.08 51.2739 47.6C51.1006 47.12 50.8072 46.74 50.3939 46.46C49.9939 46.18 49.5072 46.04 48.9339 46.04C48.3872 46.04 47.9006 46.18 47.4739 46.46C47.0472 46.7267 46.7206 47.1267 46.4939 47.66C46.2806 48.18 46.2006 48.8133 46.2539 49.56C46.2006 50.2267 46.2872 50.82 46.5139 51.34C46.7539 51.8467 47.1006 52.24 47.5539 52.52C48.0206 52.8 48.5539 52.94 49.1539 52.94C49.7539 52.94 50.2606 52.8133 50.6739 52.56C51.1006 52.3067 51.4339 51.9667 51.6739 51.54L53.7939 52.58C53.5806 53.1 53.2472 53.56 52.7939 53.96C52.3406 54.36 51.8006 54.6733 51.1739 54.9C50.5606 55.1267 49.8806 55.24 49.1339 55.24ZM59.4809 55.24C58.7209 55.24 58.0609 55.1133 57.5009 54.86C56.9409 54.6067 56.5076 54.2467 56.2009 53.78C55.8943 53.3 55.7409 52.7467 55.7409 52.12C55.7409 51.52 55.8743 50.9867 56.1409 50.52C56.4076 50.04 56.8209 49.64 57.3809 49.32C57.9409 49 58.6476 48.7733 59.5009 48.64L63.0609 48.06V50.06L60.0009 50.58C59.4809 50.6733 59.0943 50.84 58.8409 51.08C58.5876 51.32 58.4609 51.6333 58.4609 52.02C58.4609 52.3933 58.6009 52.6933 58.8809 52.92C59.1743 53.1333 59.5343 53.24 59.9609 53.24C60.5076 53.24 60.9876 53.1267 61.4009 52.9C61.8276 52.66 62.1543 52.3333 62.3809 51.92C62.6209 51.5067 62.7409 51.0533 62.7409 50.56V47.76C62.7409 47.2933 62.5543 46.9067 62.1809 46.6C61.8209 46.28 61.3409 46.12 60.7409 46.12C60.1809 46.12 59.6809 46.2733 59.2409 46.58C58.8143 46.8733 58.5009 47.2667 58.3009 47.76L56.1609 46.72C56.3743 46.1467 56.7076 45.6533 57.1609 45.24C57.6276 44.8133 58.1743 44.48 58.8009 44.24C59.4276 44 60.1076 43.88 60.8409 43.88C61.7343 43.88 62.5209 44.0467 63.2009 44.38C63.8809 44.7 64.4076 45.1533 64.7809 45.74C65.1676 46.3133 65.3609 46.9867 65.3609 47.76V55H62.8809V53.14L63.4409 53.1C63.1609 53.5667 62.8276 53.96 62.4409 54.28C62.0543 54.5867 61.6143 54.8267 61.1209 55C60.6276 55.16 60.0809 55.24 59.4809 55.24ZM71.9225 55.24C70.7625 55.24 69.7492 54.9667 68.8825 54.42C68.0292 53.86 67.4425 53.1067 67.1225 52.16L69.0825 51.22C69.3625 51.8333 69.7492 52.3133 70.2425 52.66C70.7492 53.0067 71.3092 53.18 71.9225 53.18C72.4025 53.18 72.7825 53.0733 73.0625 52.86C73.3425 52.6467 73.4825 52.3667 73.4825 52.02C73.4825 51.8067 73.4225 51.6333 73.3025 51.5C73.1958 51.3533 73.0425 51.2333 72.8425 51.14C72.6558 51.0333 72.4492 50.9467 72.2225 50.88L70.4425 50.38C69.5225 50.1133 68.8225 49.7067 68.3425 49.16C67.8758 48.6133 67.6425 47.9667 67.6425 47.22C67.6425 46.5533 67.8092 45.9733 68.1425 45.48C68.4892 44.9733 68.9625 44.58 69.5625 44.3C70.1758 44.02 70.8758 43.88 71.6625 43.88C72.6892 43.88 73.5958 44.1267 74.3825 44.62C75.1692 45.1133 75.7292 45.8067 76.0625 46.7L74.0625 47.64C73.8758 47.1467 73.5625 46.7533 73.1225 46.46C72.6825 46.1667 72.1892 46.02 71.6425 46.02C71.2025 46.02 70.8558 46.12 70.6025 46.32C70.3492 46.52 70.2225 46.78 70.2225 47.1C70.2225 47.3 70.2758 47.4733 70.3825 47.62C70.4892 47.7667 70.6358 47.8867 70.8225 47.98C71.0225 48.0733 71.2492 48.16 71.5025 48.24L73.2425 48.76C74.1358 49.0267 74.8225 49.4267 75.3025 49.96C75.7958 50.4933 76.0425 51.1467 76.0425 51.92C76.0425 52.5733 75.8692 53.1533 75.5225 53.66C75.1758 54.1533 74.6958 54.54 74.0825 54.82C73.4692 55.1 72.7492 55.24 71.9225 55.24ZM79.1806 59.4C78.8873 59.4 78.6006 59.3733 78.3206 59.32C78.0406 59.28 77.7873 59.2 77.5606 59.08V56.9C77.734 56.94 77.9406 56.98 78.1806 57.02C78.434 57.06 78.6673 57.08 78.8806 57.08C79.4806 57.08 79.914 56.94 80.1806 56.66C80.4606 56.3933 80.7073 56.0333 80.9206 55.58L81.6406 53.9L81.6006 56.1L76.8606 44.12H79.6806L83.0006 52.96H82.0006L85.3006 44.12H88.1406L83.4006 56.1C83.1206 56.7933 82.7806 57.3867 82.3806 57.88C81.9806 58.3733 81.514 58.7467 80.9806 59C80.4606 59.2667 79.8606 59.4 79.1806 59.4Z"
        fill="#10B989"
      />
      <path
        d="M14.5 43.0634C15.7601 40.5061 17.0066 36.6141 18.9107 34.7021C21.7997 31.801 24.4585 34.5897 26.3184 37.3847C31.9643 44.8911 36.0022 15.9233 37.5747 16.6071C38.3901 16.9618 39.0833 19.544 39.3367 20.2042C40.2351 22.5447 41.0651 24.9153 42.0108 27.2326C42.9865 29.6231 44.0861 31.9413 45.0166 34.3556C45.7527 36.2654 47.843 32.8567 48.4399 32.0634C54.5 25.5635 52 28 60 19"
        stroke="#10B989"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57.6251 7.3125C57.8899 7.31255 58.1475 7.39886 58.3589 7.55836C58.5703 7.71786 58.724 7.94187 58.7967 8.1965L60.1178 12.8212C60.4023 13.8172 60.9359 14.7243 61.6684 15.4567C62.4008 16.1891 63.3079 16.7228 64.3038 17.0072L68.9286 18.3284C69.1831 18.4013 69.4069 18.555 69.5662 18.7664C69.7255 18.9778 69.8117 19.2353 69.8117 19.5C69.8117 19.7647 69.7255 20.0222 69.5662 20.2336C69.4069 20.445 69.1831 20.5987 68.9286 20.6716L64.3038 21.9927C63.3079 22.2772 62.4008 22.8108 61.6684 23.5433C60.9359 24.2757 60.4023 25.1828 60.1178 26.1787L58.7967 30.8035C58.7238 31.058 58.5701 31.2818 58.3587 31.4411C58.1473 31.6004 57.8898 31.6866 57.6251 31.6866C57.3604 31.6866 57.1029 31.6004 56.8915 31.4411C56.6801 31.2818 56.5264 31.058 56.4535 30.8035L55.1323 26.1787C54.8479 25.1828 54.3142 24.2757 53.5818 23.5433C52.8494 22.8108 51.9423 22.2772 50.9463 21.9927L46.3216 20.6716C46.0671 20.5987 45.8433 20.445 45.684 20.2336C45.5247 20.0222 45.4385 19.7647 45.4385 19.5C45.4385 19.2353 45.5247 18.9778 45.684 18.7664C45.8433 18.555 46.0671 18.4013 46.3216 18.3284L50.9463 17.0072C51.9423 16.7228 52.8494 16.1891 53.5818 15.4567C54.3142 14.7243 54.8479 13.8172 55.1323 12.8212L56.4535 8.1965C56.5262 7.94187 56.6799 7.71786 56.8913 7.55836C57.1027 7.39886 57.3603 7.31255 57.6251 7.3125ZM72.2501 2.4375C72.522 2.43735 72.7861 2.52812 73.0005 2.69537C73.2148 2.86261 73.3671 3.09674 73.4331 3.3605L73.8523 5.044C74.2358 6.5715 75.4286 7.76425 76.9561 8.14775L78.6396 8.567C78.9039 8.63246 79.1386 8.78451 79.3064 8.99892C79.4742 9.21333 79.5653 9.47775 79.5653 9.75C79.5653 10.0223 79.4742 10.2867 79.3064 10.5011C79.1386 10.7155 78.9039 10.8675 78.6396 10.933L76.9561 11.3522C75.4286 11.7357 74.2358 12.9285 73.8523 14.456L73.4331 16.1395C73.3676 16.4038 73.2156 16.6385 73.0012 16.8063C72.7868 16.9741 72.5224 17.0652 72.2501 17.0652C71.9778 17.0652 71.7134 16.9741 71.499 16.8063C71.2846 16.6385 71.1326 16.4038 71.0671 16.1395L70.6478 14.456C70.4603 13.7059 70.0725 13.021 69.5258 12.4743C68.9791 11.9276 68.2941 11.5398 67.5441 11.3522L65.8606 10.933C65.5963 10.8675 65.3616 10.7155 65.1938 10.5011C65.026 10.2867 64.9349 10.0223 64.9349 9.75C64.9349 9.47775 65.026 9.21333 65.1938 8.99892C65.3616 8.78451 65.5963 8.63246 65.8606 8.567L67.5441 8.14775C68.2941 7.96024 68.9791 7.57242 69.5258 7.02573C70.0725 6.47904 70.4603 5.79405 70.6478 5.044L71.0671 3.3605C71.1331 3.09674 71.2854 2.86261 71.4997 2.69537C71.7141 2.52812 71.9782 2.43735 72.2501 2.4375ZM69.8126 24.375C70.0686 24.3749 70.3181 24.4553 70.5257 24.6049C70.7334 24.7546 70.8887 24.9658 70.9696 25.2086L71.6099 27.131C71.8536 27.8574 72.4224 28.4294 73.1504 28.6715L75.0727 29.3134C75.3148 29.3946 75.5252 29.5499 75.6743 29.7572C75.8234 29.9645 75.9036 30.2134 75.9036 30.4687C75.9036 30.7241 75.8234 30.973 75.6743 31.1803C75.5252 31.3876 75.3148 31.5429 75.0727 31.6241L73.1504 32.266C72.424 32.5097 71.852 33.0785 71.6099 33.8065L70.968 35.7289C70.8867 35.9709 70.7315 36.1814 70.5241 36.3304C70.3168 36.4795 70.0679 36.5597 69.8126 36.5597C69.5573 36.5597 69.3084 36.4795 69.101 36.3304C68.8937 36.1814 68.7385 35.9709 68.6572 35.7289L68.0153 33.8065C67.8956 33.4478 67.6941 33.1219 67.4268 32.8546C67.1594 32.5872 66.8335 32.3857 66.4748 32.266L64.5525 31.6241C64.3104 31.5429 64.1 31.3876 63.9509 31.1803C63.8018 30.973 63.7216 30.7241 63.7216 30.4687C63.7216 30.2134 63.8018 29.9645 63.9509 29.7572C64.1 29.5499 64.3104 29.3946 64.5525 29.3134L66.4748 28.6715C67.2012 28.4277 67.7732 27.859 68.0153 27.131L68.6572 25.2086C68.738 24.966 68.8931 24.755 69.1004 24.6054C69.3078 24.4558 69.5569 24.3752 69.8126 24.375Z"
        fill="#10B989"
      />
    </svg>
  );
};

export default BrandLogo;
