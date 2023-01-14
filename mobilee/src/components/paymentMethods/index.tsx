import { Text, TextProps, View } from "react-native";
import { Barcode, QrCode, Money, CreditCard, Bank } from 'phosphor-react-native';
import { PaymentDataTypeProps } from "src/@types/ad";
import theme from "@theme/index";
import styles from "./styles";

type Props = TextProps & {
    data: PaymentDataTypeProps;
};

const PaymentMethods: React.FC<Props> = ({ data: { ticket, pix, money, creditCard, bankDeposit }, ...rest }) => {
    return (
        <View>
            {ticket &&
                <View style={styles.content}>
                    <Barcode
                        color={theme.COLORS.BASE.GRAY_100}
                    />
                    <Text style={styles.title}>
                        Boleto
                    </Text>
                </View>
            }
            {pix &&
                <View style={styles.content}>
                    <QrCode
                        color={theme.COLORS.BASE.GRAY_100}
                    />
                    <Text style={styles.title}>
                        Pix
                    </Text>
                </View>
            }
            {money &&
                <View style={styles.content}>
                    <Money
                        color={theme.COLORS.BASE.GRAY_100}
                    />
                    <Text style={styles.title}>
                        Dinheiro
                    </Text>
                </View>
            }
            {creditCard &&
                <View style={styles.content}>
                    <CreditCard
                        color={theme.COLORS.BASE.GRAY_100}
                    />
                    <Text style={styles.title}>
                        Cartão de Crédito
                    </Text>
                </View>
            }
            {bankDeposit &&
                <View style={styles.content}>
                    <Bank
                        color={theme.COLORS.BASE.GRAY_100}
                    />
                    <Text style={styles.title}>
                        Depósito Bancário
                    </Text>
                </View>
            }
        </View>
    );
};

export default PaymentMethods;