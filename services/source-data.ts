
// services/source-data.ts

interface KnowledgeDoc {
    id: string;
    title: string;
    path: string;
    content: string;
}

export const knowledgeBase: KnowledgeDoc[] = [
    {
        id: 'terms-of-service',
        title: 'Terms of Service',
        path: 'SOURCE_FILES/TERMS.md',
        content: `
# Terms of Service

Last Updated: October 26, 2025

## 1. Acceptance of Terms

By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to update these terms at any time without prior notice. Your continued use of the service constitutes acceptance of the new terms.

## 2. Service Description

Our platform provides tools and services for online payments, including but not limited to commercial transactions, personal payments, and merchant services. All services are provided "as is" without any warranty of any kind, express or implied. We do not guarantee that the service will be uninterrupted or error-free.

## 3. User Accounts

You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. We will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge.

## 4. Prohibited Activities

You may not use the service for any illegal or unauthorized purpose. You agree to comply with all local, state, national, and international laws regarding online conduct and acceptable content. Prohibited activities include, but are not limited to:
-   Fraudulent transactions.
-   Infringing on intellectual property rights.
-   Distributing malware or spam.
-   Harassing or harming other users.

## 5. Limitation of Liability

In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
        `
    },
    {
        id: 'customer-fees',
        title: 'Customer Fees',
        path: 'SOURCE_FILES/customer-fees.txt',
        content: `
Last Updated: 21, April 2025
 You can find details about changes to our rates and fees and when they will apply on our
 Policy Updates Page. You can also view these changes by clicking ‘Legal’ at the bottom of any 
web-page and then selecting ‘Policy Updates’.
 Domestic
 A transaction occurring when both the sender and receiver are registered with or identified by 
PayPal as residents of the same market.
 International
 A transaction occurring when the sender and receiver are registered with or identified by PayPal as 
residents of different markets. Certain markets are grouped together when calculating 
international transaction rates. For a listing of our groupings, please access our 
Market/Region
 Grouping Table.
 International euro (EUR) or Swedish krona (SEK) transactions where both the sender and the 
receiver are registered with or identified by PayPal as resident in the European Economic Area 
(EEA) are treated as domestic transactions for the purpose of applying fees.
 Market Code Table
 We may refer to two-letter market codes throughout our fee pages. For a complete listing of PayPal 
market codes, please access our 
Market Code Table.
 Relevant Markets/Regions
Rates published below apply to PayPal accounts of residents of the following markets/regions:
 Markets/Regions list
 Albania (AL) Democratic Republic of the 
Congo (CD)
 Maldives (MV) Saint Vincent & 
Grenadines (VC)
 Algeria (DZ) Dominica (DM) Mali (ML) Samoa (WS)
 Andorra (AD) Djibouti (DJ) Marshall Islands (MH) Sao Tome & Principe (ST)
 Angola (AO) Dominican Republic (DO) Monaco (MC) Saudi Arabia (SA)
 Anguilla (AI) Ecuador (EC) Mauritania (MR) Senegal (SN)
 Antigua & Barbuda 
(AG)
 Egypt (EG) Mauritius (MU) Serbia (RS)
 Argentina (AR) El Salvador (SV) Moldova (MD) Seychelles (SC)
 Armenia (AM) Eritrea (ER) Mongolia (MN) Sierra Leone (SL)
Aruba (AW) Ethiopia (ET) Montenegro (ME) Solomon Islands (SB)
 Azerbaijan Republic 
(AZ)
 Falkland Islands (FK) Montserrat (MS) Somalia (SO)
 Bahamas (BS) Faroe Islands (FO) Morocco (MA) South Africa (ZA)
 Bahrain (BH) Federated States of 
Micronesia (FM)
 Mozambique (MZ) Sri Lanka (LK)
 Bangladesh (BD) Fiji (FJ) Namibia (NA) Suriname (SR)
 Barbados (BB) French Polynesia (PF) Nauru (NR) Svalbard & Jan Mayen 
(SJ)
 Belarus (BY) Gabon (GA) Nepal (NP) Swaziland (SZ)
 Belize (BZ) Gambia (GM) Netherlands Antilles 
(AN)
 Tajikistan (TJ)
Benin (BJ) Georgia (GE) New Caledonia (NC) Tanzania (TZ)
 Bermuda (BM) Greenland (GL) New Zealand (NZ) Togo (TG)
 Bhutan (BT) Grenada (GD) Nicaragua (NI) Tonga (TO)
 Bolivia (BO)
 Guatemala (GT)
 Niger (NE) Tonga (TO)
 Guinea (GN)
 Bosnia & 
Herzegovina (BA)
 Guinea-Bissau (GW) Nigeria (NG) Trinidad & Tobago (TT)
 Botswana (BW) Guyana (GY) Niue (NU) Tunisia (TN)
 British Virgin Islands 
(VG)
 Honduras (HN) Norfolk Island (NF) Turkmenistan (TM)
 Brunei (BN) Iceland (IS) Oman (OM) Turks & Caicos Islands 
(TC)
Burkina Faso (BF) Indonesia (ID) Palau (PW) Tuvalu (TV)
 Burundi (BI) Jamaica (JM) Panama (PA) Uganda (UG)
 Cambodia (KH) Jordan (JO) Papua New Guinea 
(PG)
 Ukraine (UA)
 Cameroon (CM) Kazakhstan (KZ) Paraguay (PY) United Arab Emirates 
(AE)
 Cape Verde (CV) Kenya (KE) Peru (PE) Uruguay (UY)
 Cayman Islands (KY) Kiribati (KI) Philippines (PH) Vanuatu (VU)
 Chad (TD) Kuwait (KW) Pitcairn Islands (PN) Venezuela (VE)
 Chile (CL) Kyrgyzstan (KG) Qatar (QA) Wallis & Futuna Islands 
(WF)
Columbia (CO) Laos (LA) Republic of the Congo 
(CG)
 Yemen (YE)
 Comoros (KM) Lesotho (LS) Rwanda (RW) Zambia (ZM)
 Cook Islands (CK) Macedonia (MK) Saint Helena (SH) Zimbabwe (ZW)
 Costa Rica (CR) Madagascar (MG) Saint Kitts & Nevis (KN)
 Cote d’Ivoire (CI) Malawi (MW) Saint Lucia (LC)
 Croatia (HR) Malaysia (MY) Saint Pierre & 
Miquelon (PM)
 It’s free to use PayPal to pay for a purchase or any other type of commercial transaction unless it 
involves a currency conversion.
 Buying with PayPal
 Online or in-store
Rate
 No Fee (when no currency conversion is involved)
 Selling with PayPal
 When you buy or sell goods or services, make any other commercial type of transaction, send or 
receive a charity donation or receive a payment when you “request money” using PayPal, we call 
that a “commercial transaction”.
 For the listings of selling rates, please visit our 
PayPal Merchant Fees Page.
 Sending and receiving payments
 When you send funds (initiated from the “Friends and Family” tab of the “Send” flow) to, or receive 
funds into your PayPal account from, friends and family without making an underlying commercial 
transaction (that is, the payment is not for the purchase of goods or services or for making any 
other commercial transaction), we call that a “personal transaction”.
 Personal transactions are limited in availability and may not be available in some markets. If you 
use your credit card as the payment method for a personal transaction, you may be charged a 
cash-advance fee by your credit card company.
 The rates relating to personal transactions are set out below.
 Sending domestic personal transactions
PayPal Balance or Bank 
account
 AD, HR, IS, & MC No Fee (if funded in EEA in EUR/SEK)
 Where available No Fee (when no currency conversion is 
involved)
 Cards
 AD, HR, IS, & MC No Fee (if funded in EEA in EUR/SEK)
 Where available 3.4% + fixed fee
 Payment Method Sender 
Market/Region
 Rate
 Personal payments:
 If you use another payment method to partially fund the payment, the fee will be pro-rated.
 Sending international personal transactions
 Payment 
Method
 Sender 
Market/Region
 Recipient Market/Region Rate
PayPal Balance or 
Bank account
 AD, HR, IS, & MC
 Canada, Europe I, Europe II, 
Northern Europe, & US
 1.99 EUR
 Any other market 3.99 EUR
 AL, BA, MK, MD, ME, & UA
 Canada, Europe I, Europe II, 
Northern Europe, & US
 1.99 EUR
 Any other market 3.99 EUR
 NZ Any market 6.99 NZD
 Any other market where 
available
 Any market 4.99 USD
 Cards AD, HR, IS, & MC Canada, Europe I, Europe II, 
Northern Europe, & US
 1.99 EUR
 Payment 
Method
 Sender 
Market/Region
 Recipient Market/Region Rate
Any other market 3.99 EUR
 AL, BA, MK, MD, ME, & UA
 Canada, Europe I, Europe II, 
Northern Europe, & US
 1.99 EUR + 
3.4% + fixed 
fee
 Any other market 3.99 EUR + 
3.4% + fixed 
fee
 NZ Any market 6.99 NZD + 
3.4% + fixed 
fee
 Any other market/region 
where available
 Any market 4.99 USD + 
3.4% + fixed 
fee
 Payment 
Method
 Sender 
Market/Region
 Recipient Market/Region Rate
Personal payments:
 We will collect the fee from balance in the currency in which the fee is payable. To do this, we may need to convert
 the fee amount from your sending balance into the currency in which the fee is payable, in which case the fees for “Currency
 Conversions” also apply. If you use another payment method to partially fund the payment, the fee will be pro-rated.
 Fixed fee for personal transactions (based on currency received)
 Australian dollar 0.30 AUD
 Brazilian real 0.60 BRL
 Canadian dollar 0.30 CAD
 Czech koruna 10.00 CZK
 Danish krone 2.60 DKK
 Euro 0.35 EUR
 Currency Fee
Hong Kong dollar 2.35 HKD
 Hungarian forint 90.00 HUF
 Israeli new shekel 1.20 ILS
 Japanese yen 40.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 4.00 MXN
 Currency Fee
 New Taiwan dollar 10.00 TWD
 Currency Fee
New Zealand dollar 0.45 NZD
 Norwegian krone 2.80 NOK
 Philippine peso 15.00 PHP
 Polish zloty 1.35 PLN
 Russian ruble 10.00 RUB
 Singapore dollar 0.50 SGD
 Swedish krona 3.25 SEK
 Swiss franc 0.55 CHF
 Currency Fee
Thai baht 11.00 THB
 UK pounds sterling 0.20 GBP
 US dollar 0.30 USD
 Currency Fee
 Receiving personal transactions
 No Fee (when no currency conversion is involved)
 Rate
 For information about how we convert currency, please see the user agreement.
 The transaction exchange rate used for your currency conversion includes a fee which we charge 
above the base exchange rate. The fee depends on the type of currency conversion, as follows:
 Currency Conversions
Conversions when sending payments or receiving refund(s)
 For any currency conversions that occur when making personal payments or commercial 
transactions and receiving a refund beyond 1 day of the date of the original payment.
 AMERICAS: Anguilla, Antigua and Barbuda, Argentina, Aruba, Bahamas, 
Barbados, Belize, Bermuda, Bolivia, Cayman Islands, Chile, 
Colombia, Costa Rica, Dominica, Dominican Republic, 
Ecuador, El Salvador, Falkland Islands, Grenada, Guatemala, 
Guyana, Honduras, Jamaica, Montserrat, Netherlands 
Antilles, Nicaragua, Panama, Paraguay, Peru, Saint Kitts and 
Nevis, Saint Lucia, Saint Vincent and the Grenadines, 
Suriname, Trinidad & Tobago, Turks and Caicos Islands, 
Uruguay, Venezuela, Virgin Islands
 4.5%
 ASIA PACIFIC: Bhutan, Cambodia, Federated States of Micronesia, 
Indonesia, Laos, Maldives, Mongolia, Nepal, New Zealand, 
Philippines, Samoa, Singapore, Sri Lanka, Tonga
 4.0%
 MIDDLE EAST & AFRICA: Algeria, Angola, Bahrain, Benin, Botswana, Burkina Faso, 
Burundi, Cameroon, Cape Verde, Chad, Comoros, Congo, 
Democratic Rep of the Congo, Cook Islands, Djibouti, Egypt, 
Eritrea, Ethiopia, Gabon, Gambia, Ghana, Guinea, Guinea 
4.0%
 Market/Region Rate
Bissau, Ivory Coast, Jordan, Kazakhstan, Kenya, Kuwait, 
Kyrgyzstan, Lesotho, Madagascar, Malawi, Mali, Mauritania, 
Mauritius, Morocco, Mozambique, Namibia, Niger, Nigeria, 
Oman, Qatar, Rwanda, Sao Tome And Principe, Saudi 
Arabia, Senegal, Seychelles, Sierra Leone, Somalia, South 
Africa, St. Helena, Swaziland, Tajikistan, Tanzania, Togo, 
Tunisia, Turkmenistan, Uganda, United Arab Emirates, 
Yemen, Zambia, Zimbabwe
 SOUTH EAST EUROPE: Albania, Andorra, Azerbaijan, Belarus, Bosnia and 
Herzegovina, Croatia, Georgia, Iceland, Macedonia, 
Moldova, Montenegro, Serbia, Ukraine
 4.0%
 Market/Region Rate
 Malaysia - Conversions when sending payments or receiving refund(s)
 For any currency conversions that occur when making commercial transactions and receiving a 
refund beyond 1 day of the date of the original payment.
Australian 
dollar (AUD)
 4.00% New Taiwan 
dollar (TWD)
 4.00%
 Brazilian real 
(BRL)
 4.00% New Zealand 
dollar (NZD)
 4.00%
 Canadian 
dollar (CAD)
 3.50% Norwegian 
krone (NOK)
 4.00%
 Czech koruna 
(CZK)
 4.00% Philippine 
peso (PHP)
 4.00%
 Danish krone 
(DKK)
 4.00% Polish zloty 
(PLN)
 4.00%
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
Euro (EUR) 4.00% Russian ruble 
(RUB)
 4.00%
 Hong Kong 
dollar (HKD)
 4.00% Singapore 
dollar (SGD)
 4.00%
 Hungarian 
forint (HUF)
 4.00% Swedish krona 
(SEK)
 4.00%
 Israeli new 
shekel (ILS)
 4.00% Swiss franc 
(CHF)
 4.00%
 Japanese yen 
(JPY)
 4.00% Thai baht (THB) 4.00%
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
Malaysian 
ringgit (MYR)
 4.00% UK pounds 
sterling (GBP)
 4.00%
 Mexican peso 
(MXN)
 4.00% US dollar (USD) 3.50%
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Monaco - Conversions when sending payments or receiving refund(s)
 For any currency conversions that occur when making personal payments or commercial 
transactions and receiving a refund beyond 1 day of the date of the original payment.
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
Australian 
dollar (AUD)
 4.00% New Taiwan 
dollar (TWD)
 4.00%
 Brazilian real 
(BRL)
 4.00% New Zealand 
dollar (NZD)
 4.00%
 Canadian 
dollar (CAD)
 3.50% Norwegian 
krone (NOK)
 4.00%
 Czech koruna 
(CZK)
 4.00% Philippine 
peso (PHP)
 4.00%
 Danish krone 
(DKK)
 4.00% Polish zloty 
(PLN)
 4.00%
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
Euro (EUR) 4.00% Russian ruble 
(RUB)
 4.00%
 Hong Kong 
dollar (HKD)
 4.00% Singapore 
dollar (SGD)
 4.00%
 Hungarian 
forint (HUF)
 4.00% Swedish krona 
(SEK)
 4.00%
 Israeli new 
shekel (ILS)
 4.00% Swiss franc 
(CHF)
 4.00%
 Japanese yen 
(JPY)
 4.00% Thai baht (THB) 4.00%
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
Malaysian 
ringgit (MYR)
 4.00% UK pounds 
sterling (GBP)
 4.00%
 Mexican peso 
(MXN)
 4.00% US dollar (USD) 3.50%
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Currency Rate above the base 
exchange rate (to form the 
transaction exchange 
rate)
 Converting balance, transfers, and payments received into another currency
 For any currency conversions that occur when receiving other payments (including PayPal 
Payouts), adding funds to your PayPal account, transferring funds to your bank/card account, and 
when transferring funds between your PayPal balances if held in different currencies.
 AMERICAS: Anguilla, Antigua and Barbuda, Argentina, Aruba, Bahamas, 
Barbados, Belize, Bermuda, Bolivia, Cayman Islands, Chile, 
3.5%
 Market/Region Rate
Colombia, Costa Rica, Dominica, Dominican Republic, 
Ecuador, El Salvador, Falkland Islands, Grenada, Guatemala, 
Guyana, Honduras, Jamaica, Montserrat, Netherlands 
Antilles, Nicaragua, Panama, Paraguay, Peru, Saint Kitts and 
Nevis, Saint Lucia, Saint Vincent and the Grenadines, 
Suriname, Trinidad & Tobago, Turks and Caicos Islands, 
Uruguay, Venezuela, Virgin Islands
 ASIA PACIFIC: Bhutan, Cambodia, Federated States of Micronesia, 
Indonesia, Laos, Maldives, Mongolia, Nepal, New Zealand, 
Philippines, Samoa, Singapore, Sri Lanka, Tonga
 3.0%
 MIDDLE EAST & AFRICA: Algeria, Angola, Bahrain, Benin, Botswana, Burkina Faso, 
Burundi, Cameroon, Cape Verde, Chad, Comoros, Congo, 
Democratic Rep of the Congo, Cook Islands, Djibouti, Egypt, 
Eritrea, Ethiopia, Gabon, Gambia, Ghana, Guinea, Guinea 
Bissau, Ivory Coast, Jordan, Kazakhstan, Kenya, Kuwait, 
Kyrgyzstan, Lesotho, Madagascar, Malawi, Mali, Mauritania, 
Mauritius, Morocco, Mozambique, Namibia, Niger, Nigeria, 
Oman, Qatar, Rwanda, Sao Tome And Principe, Saudi 
Arabia, Senegal, Seychelles, Sierra Leone, Somalia, South 
Africa, St. Helena, Swaziland, Tajikistan, Tanzania, Togo, 
Tunisia, Turkmenistan, Uganda, United Arab Emirates, 
Yemen, Zambia, Zimbabwe
 3.0%
 Market/Region Rate
Malaysia 2.5%
 SOUTH EAST EUROPE: Albania, Andorra, Azerbaijan, Belarus, Bosnia and 
Herzegovina, Croatia, Georgia, Iceland, Macedonia, 
Moldova, Monaco, Montenegro, Serbia, Ukraine
 3.0%
 Market/Region Rate
 Conversions in all other cases
 Rates for all other currency conversions:
 3.00%
 Rate
 Withdrawals Out of PayPal
You can typically withdraw money out of PayPal by standard withdrawals/transfers to your linked 
bank account or eligible cards. Withdrawal to a bank account or a card may not be possible in all 
markets/regions. A currency conversion (and currency conversion fees) may also apply.
 Note: For additional listings of transfer rates out of business accounts, please visit our PayPal 
Merchant Fees Page.
 Withdrawing a balance from a personal PayPal account
 Bank account
 AE
 No Fee (when no currency 
conversion is involved) 
where AED withdrawal 
amount is greater than 750.00 
AED
 11.00 AED
 If AED withdrawal amount is less 
than 750.00 AED
 1.50%, minimum fee 15.00 USD
 (per USD withdrawal)*
 Withdrawal/Transfer to Market/Region Rate
AL 536.00 ALL (per ALL 
withdrawal)*
 AR 75.00 ARS (per ARS 
withdrawal)
 BH 2.00 BHD (per BHD 
withdrawal)*
 CL
 800.00 CLP (per CLP 
withdrawal)
 1.00%, minimum fee 10.00 USD
 (per USD withdrawal)
 CO 3500.00 COP (per COP 
withdrawal)
 Withdrawal/Transfer to Market/Region Rate
CR
 625.00 CRC (per CRC 
withdrawal)
 1.00%, minimum fee 10.00 USD
 (per USD withdrawal)
 DO
 100.00 DOP (per DOP 
withdrawal)
 0.50%, minimum fee 10.00 USD
 (per USD withdrawal)
 EC 0.50%, minimum fee 10.00 USD
 (per USD withdrawal)
 EG 125.00 EGP (per EGP 
withdrawal)
 Withdrawal/Transfer to Market/Region Rate
GE 13.50 GEL (per GEL 
withdrawal)*
 ID
 No Fee (when no currency 
conversion is involved) 
where IDR withdrawal amount 
is greater than 1,500,000.00 
IDR
 16,000.00 IDR
 If IDR withdrawal amount is less 
than 1,500,000.00 IDR
 JO 3.50 JOD (per JOD 
withdrawal)*
 KE No Fee (when no currency 
conversion is involved) 
where KES withdrawal 
amount is greater than 
20,000.00 KES
 Withdrawal/Transfer to Market/Region Rate
105.00 KES
 If KES withdrawal amount is less 
than 20,000.00 KES
 KW 1.50 KWD (per KWD 
withdrawal)*
 MA
 No Fee (when no currency 
conversion is involved) 
where MAD withdrawal 
amount is greater than 
2000.00 MAD
 30.00 MAD
 If MAD withdrawal amount is 
less than 2000.00 MAD
 MD 96.00 MDL (per MDL 
withdrawal)*
 Withdrawal/Transfer to Market/Region Rate
MU 220.00 MUR (per MUR 
withdrawal)*
 MY
 No Fee (when no currency 
conversion is involved) 
where MYR withdrawal 
amount is greater than 400.00 
MYR
 3.00 MYR
 If MYR withdrawal amount is 
less than 400.00 MYR
 OM 2.00 OMR (per OMR 
withdrawal)*
 PA 1.00%, minimum fee 15.00 USD
 (per USD withdrawal)*
 Withdrawal/Transfer to Market/Region Rate
PE
 4.00 PEN (per PEN 
withdrawal)
 1.00%, minimum fee 10.00 USD
 (per USD withdrawal)
 PH
 No Fee (when no currency 
conversion is involved) 
where PHP withdrawal 
amount is greater than 
7000.00 PHP
 50.00 PHP
 If PHP withdrawal amount is less 
than 7000.00 PHP
 QA 18.00 QAR (per QAR 
withdrawal)*
 Withdrawal/Transfer to Market/Region Rate
RS 550.00 RSD (per RSD 
withdrawal)*
 SG
 No Fee (when no currency 
conversion is involved) 
where SGD withdrawal 
amount is greater than 200.00 
SGD
 1.00 SGD
 If SGD withdrawal amount is 
less than 200.00 SGD
 SV 0.50%, minimum fee 10.00 USD
 (per USD withdrawal)
 UY 200.00 UYU (per UYU 
withdrawal)
 Withdrawal/Transfer to Market/Region Rate
All other markets (where 
available)
 No Fee (when no currency conversion is 
involved)
 US Bank account
 AR & CO 3.50%
 CL, CR, DO, & PE 3.00%
 AE, AL, AO, AZ, BF, BH, BJ, CD, CI, CM, EC, 
EG, ET, GA, GE, GN, ID, JO, KE, KG, KW, MD, 
MG, MU, NA, NG, NZ, OM, PA, PH, QA, RS, 
RW, SG, SL, SV, TG, TJ, TM, TN, TZ, UG, UY, 
ZM, ZW
 3.00%
 All other markets No Fee (when no currency 
conversion is involved)
 Cards HR, KW, PH, QA, RS, & SG 1% of amount transferred
 Minimum and maximum 
fees apply based on the 
Withdrawal/Transfer to Market/Region Rate
card withdrawal currency, 
in the table below
 AL, DZ, AG, BS, BH, BB, BZ, BA, BW, CL, DM, 
EG, FJ, PF, GE, GD, HN, IS, JO, KZ, LS, MW, 
MU, MD, MA, MZ, NC, OM, PW, KN, LC, SA, 
SN, SC, TT, TC, AE, & UY
 Fixed Fee for card withdrawal 
applies per withdrawal
 Fees apply based on the 
card withdrawal currency, 
in the table below
 ID, MY Fixed Fee for card withdrawal 
applies per withdrawal
 Fees apply based on the 
card withdrawal currency, 
in the table below
 Manual Withdrawals/Transfers 
to Visa Credit Card
 AL, AG, BA, BB, BZ, DM, DZ, EG, FJ, PF, GD, 
KN, LC, LS, MW, NC, PW, SC, TC, & TT
 5.00 USD (or equivalent)
 Withdrawal/Transfer to Market/Region Rate
*Additional fees may be charged by your bank resulting in less than full amount being credited to your bank account. PayPal will bear no
 responsibility for any fees or costs (including lifting fees) imposed by the beneficiary bank where you have your bank account into which
 you request the withdrawal, or its intermediary/correspondent bank.
 Currency Conversions: If you withdraw your balance in a currency other than the currency in which the balance on your account is
 denominated, you will additionally be charged currency conversion fees.
 HR, KW, PH, QA, RS & SG - Minimum and maximum fees
 Based on card withdrawal currency:
 Afghan Afghani 25.00 AFN 1,050.00 AFN
 Armenian dram 135.00 AMD 5250.00 AMD
 Australian dollar 0.25 AUD 10.00 AUD
 Azerbaijan manat 0.45 AZN 17.50 AZN
 Bahraini dinar 0.10 BHD 4.00 BHD
 Currency Minimum Fee Maximum Fee
Bangladeshi Taka 22.00 BDT 880.00 BDT
 Belizean dollar 0.50 BZD 20.00 BZD
 Bulgarian lev 0.50 BGN 20.00 BGN
 Canadian dollar 0.25 CAD 10.00 CAD
 CFA france 135.00 XOF 5400.00 XOF
 Czech koruna 5.70 CZK 230.00 CZK
 Danish krone 1.80 DKK 70.00 DKK
 Eritrean Nakfa 3.75 ERN 150.00 ERN
 Currency Minimum Fee Maximum Fee
Euro 0.25 EUR 10.00 EUR
 Ghanaian Cedi 1.55 GHS 62.50 GHS
 Haitian Gourde 25.00 HTG 1,000.00 HTG
 Hong Kong dollar 2.00 HKD 80.00 HKD
 Hungarian forint 70.00 HUF 2900.00 HUF
 Iraqi Dinar 365.00 IQD 14,500.00 IQD
 Israeli new shekel 1.00 ILS 40.00 ILS
 Japanese yen 30.00 JPY 1100.00 JPY
 Currency Minimum Fee Maximum Fee
Jordanian dinar 0.20 JOD 7.25 JOD
 Kuwaiti dinar 1 KWD No Max
 Kyrgyzstani som 22.50 KGS 850.00 KGS
 Lebanese Pound 380.00 LBP 15,250.00 LBP
 Lesotho Loti 4.00 LSL 160.00 LSL
 Liberian Dollar 37.50 LRD 1,500.00 LRD
 Macanese Pataca 2.00 MOP 80.00 MOP
 Malaysian ringgit 1.00 MYR 40.00 MYR
 Currency Minimum Fee Maximum Fee
Mauritanian Ouguiya 9 MRU 360.00 MRU
 Mexican peso 5.00 MXN 200.00 MXN
 Mozambican metical 20.00 MZN 750.00 MZN
 Myanmar Kyat 450.00 MMK 18,000.00 MMK
 New Zealand dollar 0.40 NZD 15.00 NZD
 Norwegian krone 1.00 NOK 40.00 NOK
 Omani rial 0.10 OMR 4.00 OMR
 Pakistani Rupee 45.00 PKR 1,800.00 PKR
 Currency Minimum Fee Maximum Fee
Philippine peso 10.00 PHP 500.00 PHP
 Polish zloty 1.00 PLN 40.00 PLN
 Qatari rial 1.00 QAR 40.00 QAR
 Romania new lei 1.00 RON 40.00 RON
 Russian ruble 20.00 RUB 700.00 RUB
 Rwandan franc 250.00 RWF 10,000.00 RWF
 Salvadoran Colón 2.25 SVC 90.00 SVC
 São Tomé And Príncipe Dobra 5.50 STN 220.00 STN
 Currency Minimum Fee Maximum Fee
Serbian dinar 25.00 RSD 1000.00 RSD
 Singapore dollar 0.50 SGD 15.00 SGD
 South African rand 3.60 ZAR 145.00 ZAR
 Sri Lanka rupee 50.00 LKR 1800.00 LKR
 Swedish krona 2.50 SEK 100.00 SEK
 Swiss franc 0.25 CHF 10.00 CHF
 Thai baht 8.00 THB 320.00 THB
 Tunisian dinar 0.75 TND 27.50 TND
 Currency Minimum Fee Maximum Fee
Turkish lira 3.50 TRY 140.00 TRY
 Turkmenistani Manat 1.00 TMT 40.00 TMT
 Ugandan shilling 930.00 UGX 37,500.00 UGX
 United Arab Emirates dirham 0.90 AED 36.70 AED
 UK pounds sterling 0.20 GBP 8.00 GBP
 US dollar 0.25 USD 10.00 USD
 Uzbekistani Som 3,000.00 UZS 120,000.00 UZS
 Venezuelan bolivar 2,000,000.00 VES 60,000,000.00 VES
 Currency Minimum Fee Maximum Fee
Zambian kwacha 5.50 ZMW 215.00 ZMW
 ALL Other Currencies No Min No Max
 Currency Minimum Fee Maximum Fee
 Currency Conversions:
 If you withdraw your balance in a currency other than the currency in which the balance on your account is
 denominated, you will additionally be charged currency conversion fees.
 AL, DZ, AG, BS, BH, BB, BZ, BA, BW, CL, DM, EG, FJ, PF, GE, GD, HN, IS, JO, KZ, LS, MW, MU, MD, MA, MZ,
 NC, OM, PW, KN, LC, SA, SN, SC, TT, TC, AE, & UY - Fixed fee for card withdrawal
 Based on withdrawal currency:
 Afghan Afghani 525.00 AFN
 Albania lek 552.00 ALL
 Currency Fee
Algerian dinar 600.00 DZD
 Angola kwanza 2466.00 AOA
 Argentine peso 15.00 ARS
 Armenian dram 2625.00 AMD
 Aruban florin 9.00 AWG
 Australian dollar 7.00 AUD
 Azerbaijan manat 8.50 AZN
 Bahamian dollar 5.00 BSD
 Currency Fee
Bahraini dinar 2.00 BHD
 Balboa 5.00 PAB
 Bangladeshi Taka 440.00 BDT
 Barbados dollar 10.00 BBD
 Belizean dollar 10.00 BZD
 Bermudian dollar 5.00 BMD
 Bhutan ngultrum 355.00 BTN
 Boliviano 35.00 BOB
 Currency Fee
Botswana pula 54.00 BWP
 Brazilian real 10.00 BRL
 Brunei dollar 7.00 BND
 Bulgarian lev 7.00 BGN
 Burundi franc 9449.00 BIF
 Cabo Verde escudo 497.00 CVE
 Canadian dollar 6.00 CAD
 Cayman Island dollar 4.00 KYD
 Currency Fee
CFA franc BEAC 2956.00 XAF
 CFA france 2700.00 XOF
 Chilean peso 2400.00 CLP
 Comoro franc 2218.00 KMF
 Cordoba oro 171.00 NIO
 Columbian peso 16658.00 COP
 Congolese franc 8452.00 CDF
 Convertible mark 9.00 BAM
 Currency Fee
Costa Rican colon 2816.00 CRC
 Cypriot pound 2.40 CYP
 Czech koruna 110.00 CZK
 Currency Fee
 Dalasi 256.00 GMD
 Danish krone 30.00 DKK
 Denar 278.00 MKD
 Djibouti franc 889.00 DJF
 Currency Fee
Dominican peso 267.00 DOP
 Dong 115874.00 VND
 East Caribbean dollar 14.00 XCD
 Egyptian pound 79.00 EGP
 Eritrean Nakfa 75 ERN
 Estonian kroon 60.00 EEK
 Ethiopian birr 160.00 ETB
 Euro 4.00 EUR
 Currency Fee
Falkland Islands pound 4.00 FKP
 Fiji dollar 11.00 FJD
 Ghanaian Cedi 31.25 GHS
 Gibraltar pound 4.00 GIP
 Guarani 32625.00 PYG
 Guinea franc 47695.00 GNF
 Guyana dollar 1043.00 GYD
 Haitian Gourde 500.00 HTG
 Currency Fee
Hong Kong dollar 40.00 HKD
 Hryvnia 122.00 UAH
 Hungarian forint 1000.00 HUF
 Iceland krona 340.00 ISK
 Indian rupee 200.00 INR
 Iraqi Dinar 7250.00 IQD
 Israeli new shekel 22.00 ILS
 Japanese yen 610.00 JPY
 Currency Fee
Jamaican dollar 670.00 JMD
 Jordanian dinar 3.60 JOD
 Kenyan shilling 504.00 KES
 Kina 17.00 PGK
 Kip 44392.00 LAK
 Kuwaiti dinar 5.00 KWD
 Kwacha 3684.00 MWK
 Kyrgyzstani som 425.00 KGS
 Currency Fee
Lari 14.00 GEL
 Latvian lat 3.00 LVL
 Lebanese Pound 7600.00 LBP
 Leone 49324.00 SLL
 Lempira 123.00 HNL
 Lesotho Loti 80.00 LSL
 Liberian Dollar 750.00 LRD
 Lilangeni 72.00 SZL
 Currency Fee
Lithuanian litas 14.00 LTL
 Macanese Pataca 40.00 MOP
 Malaysian ringgit 20.00 MYR
 Malagasy Ariary 18259.00 MGA
 Maltese lira 1.80 MTL
 Mauritanian ouguiya 180.00 MRU
 Mauritius rupee 183.00 MUR
 Mexican peso 60.00 MXN
 Currency Fee
Moldovan leu 88.00 MDL
 Moroccan dirham 48.00 MAD
 Mozambican metical 375.00 MZN
 Myanmar Kyat 9000.00 MMK
 Naira 1812.00 NGN
 Namibia dollar 72.00 NAD
 Nepalese rupee 571.00 NPR
 Netherlands Antillean guilder 8.00 ANG
 Currency Fee
New Taiwan dollar 175.00 TWD
 New Zealand dollar 8.00 NZD
 Norwegian krone 32.00 NOK
 Nuevo Sol 17.00 PEN
 Omani rial 2.00 OMR
 Pa’anga 11.00 TOP
 Pakistani Rupee 900.00 PKR
 Philippine peso 250.00 PHP
 Currency Fee
Polish zloty 16.00 PLN
 Qatari rial 18.00 QAR
 Quetzal 38.00 GTQ
 Rand 40.00 ZAR
 Riel 20600.00 KHR
 Romanian leu 12.00 RON
 Rufiyaa 77.00 MVR
 Currency Fee
 Currency Fee
Rupiah 46000.00 IDR
 Russian ruble 150.00 RUB
 Rwandan franc 5000.00 RWF
 Saint Helena pound 4.00 SHP
 Salvadoran Colón 45.00 SVC
 São Tomé And Príncipe Dobra 110.00 STN
 Saudi riyal 19.00 SAR
 Serbian dinar 530.00 RSD
 Currency Fee
Seychelles rupee 68.00 SCR
 Singapore dollar 8.00 SGD
 Slovak koruna 140.00 SKK
 Solomon Islands dollar 41.00 SBD
 Somali shilling 2898.00 SOS
 Somoni 52.00 TJS
 Sri Lanka rupee 907.00 LKR
 Surinam dollar 37.00 SRD
 Currency Fee
Swedish krona 35.00 SEK
 Swiss franc 6.50 CHF
 Tala 13.00 WST
 Tanzanian shilling 11520.00 TZS
 Tenge 1887.00 KZT
 Thai baht 200.00 THB
 Trinidad and Tobago dollar 34.00 TTD
 Tugrik 13735.00 MNT
 Currency Fee
Tunisian dinar 13.00 TND
 Turkish lira 70.00 TRY
 Turkmenistani Manat 20.00 TMT
 Uganda shilling 18388.00 UGX
 UAE dirham 20.00 AED
 UK pounds sterling 3.00 GBP
 US dollar 5.00 USD
 Uzbekistani Som 60,000.00 UZS
 Currency Fee
Uruguay peso 100.00 UYI/UYU
 Vatu 582.00 VUV
 Venezuelan bolivar 30,000,000.00 VES
 Won 5830.00 KRW
 Yemeni rial 1252.00 YER
 Yuan renminbi 35.00 CNY
 Zambian kwacha 107.50 ZMW
 Currency Fee
 Currency Conversions:
 If you withdraw your balance in a currency other than the currency in which the balance on your account is
 denominated, you will additionally be charged currency conversion fees.
ID & MY - Fixed fee for card withdrawal
 Based on withdrawal currency:
 Afghan Afghani 525.00 AFN
 Albania lek 552.00 ALL
 Algerian dinar 600.00 DZD
 Angola kwanza 2466.00 AOA
 Argentine peso 15.00 ARS
 Armenian dram 2625.00 AMD
 Aruban florin 9.00 AWG
 Currency Fee
Australian dollar 7.00 AUD
 Azerbaijan manat 8.50 AZN
 Bahamian dollar 5.00 BSD
 Bahraini dinar 2.00 BHD
 Balboa 5.00 PAB
 Bangladeshi Taka 440.00 BDT
 Barbados dollar 10.00 BBD
 Belizean dollar 10.00 BZD
 Currency Fee
Bermudian dollar 5.00 BMD
 Bhutan ngultrum 355.00 BTN
 Boliviano 35.00 BOB
 Botswana pula 54.00 BWP
 Brazilian real 10.00 BRL
 Brunei dollar 7.00 BND
 Bulgarian lev 7.00 BGN
 Burundi franc 9449.00 BIF
 Currency Fee
Cabo Verde escudo 497.00 CVE
 Canadian dollar 6.00 CAD
 Cayman Island dollar 4.00 KYD
 CFA franc BEAC 2956.00 XAF
 CFA france 2700.00 XOF
 Chilean peso 2400.00 CLP
 Comoro franc 2218.00 KMF
 Cordoba oro 171.00 NIO
 Currency Fee
Columbian peso 16658.00 COP
 Congolese franc 8452.00 CDF
 Convertible mark 9.00 BAM
 Costa Rican colon 2816.00 CRC
 Cypriot pound 2.40 CYP
 Czech koruna 110.00 CZK
 Currency Fee
 Dalasi 256.00 GMD
 Currency Fee
Danish krone 30.00 DKK
 Denar 278.00 MKD
 Djibouti franc 889.00 DJF
 Dominican peso 267.00 DOP
 Dong 115874.00 VND
 East Caribbean dollar 14.00 XCD
 Egyptian pound 79.00 EGP
 Eritrean Nakfa 75 ERN
 Currency Fee
Estonian kroon 60.00 EEK
 Ethiopian birr 160.00 ETB
 Euro 4.00 EUR
 Falkland Islands pound 4.00 FKP
 Fiji dollar 11.00 FJD
 Ghanaian Cedi 31.25 GHS
 Gibraltar pound 4.00 GIP
 Guarani 32625.00 PYG
 Currency Fee
Guinea franc 47695.00 GNF
 Guyana dollar 1043.00 GYD
 Haitian Gourde 500.00 HTG
 Hong Kong dollar 40.00 HKD
 Hryvnia 122.00 UAH
 Hungarian forint 1000.00 HUF
 Iceland krona 340.00 ISK
 Indian rupee 200.00 INR
 Currency Fee
Iraqi Dinar 7250.00 IQD
 Israeli new shekel 22.00 ILS
 Japanese yen 610.00 JPY
 Jamaican dollar 670.00 JMD
 Jordanian dinar 3.60 JOD
 Kenyan shilling 504.00 KES
 Kina 17.00 PGK
 Kip 44392.00 LAK
 Currency Fee
Kuwaiti dinar 5.00 KWD
 Kwacha 3684.00 MWK
 Kyrgyzstani som 425.00 KGS
 Currency Fee
 Lari 14.00 GEL
 Latvian lat 3.00 LVL
 Lebanese Pound 7600.00 LBP
 Leone 49324.00 SLL
 Currency Fee
Lempira 123.00 HNL
 Lesotho Loti 80.00 LSL
 Liberian Dollar 750.00 LRD
 Lilangeni 72.00 SZL
 Lithuanian litas 14.00 LTL
 Macanese Pataca 40.00 MOP
 Malaysian ringgit 3.00 MYR
 Malagasy Ariary 18259.00 MGA
 Currency Fee
Maltese lira 1.80 MTL
 Mauritanian ouguiya 180.00 MRU
 Mauritius rupee 183.00 MUR
 Mexican peso 60.00 MXN
 Moldovan leu 88.00 MDL
 Moroccan dirham 48.00 MAD
 Mozambican metical 375.00 MZN
 Myanmar Kyat 9000.00 MMK
 Currency Fee
Naira 1812.00 NGN
 Namibia dollar 72.00 NAD
 Nepalese rupee 571.00 NPR
 Netherlands Antillean guilder 8.00 ANG
 New Taiwan dollar 175.00 TWD
 New Zealand dollar 8.00 NZD
 Norwegian krone 32.00 NOK
 Nuevo Sol 17.00 PEN
 Currency Fee
Omani rial 2.00 OMR
 Pa’anga 11.00 TOP
 Pakistani Rupee 900.00 PKR
 Philippine peso 250.00 PHP
 Polish zloty 16.00 PLN
 Qatari rial 18.00 QAR
 Quetzal 38.00 GTQ
 Rand 40.00 ZAR
 Currency Fee
Riel 20600.00 KHR
 Romanian leu 12.00 RON
 Rufiyaa 77.00 MVR
 Currency Fee
 Rupiah 46000.00 IDR
 Russian ruble 150.00 RUB
 Rwandan franc 5000.00 RWF
 Saint Helena pound 4.00 SHP
 Currency Fee
Salvadoran Colón 45.00 SVC
 São Tomé And Príncipe Dobra 110.00 STN
 Saudi riyal 19.00 SAR
 Serbian dinar 530.00 RSD
 Seychelles rupee 68.00 SCR
 Singapore dollar 8.00 SGD
 Slovak koruna 140.00 SKK
 Solomon Islands dollar 41.00 SBD
 Currency Fee
Somali shilling 2898.00 SOS
 Somoni 52.00 TJS
 Sri Lanka rupee 907.00 LKR
 Surinam dollar 37.00 SRD
 Swedish krona 35.00 SEK
 Swiss franc 6.50 CHF
 Tala 13.00 WST
 Tanzanian shilling 11520.00 TZS
 Currency Fee
Tenge 1887.00 KZT
 Thai baht 200.00 THB
 Trinidad and Tobago dollar 34.00 TTD
 Tugrik 13735.00 MNT
 Tunisian dinar 13.00 TND
 Turkish lira 70.00 TRY
 Turkmenistani Manat 20.00 TMT
 Uganda shilling 18388.00 UGX
 Currency Fee
UAE dirham 20.00 AED
 UK pounds sterling 3.00 GBP
 US dollar 5.00 USD
 Uzbekistani Som 60,000.00 UZS
 Uruguay peso 100.00 UYI/UYU
 Vatu 582.00 VUV
 Venezuelan bolivar 30,000,000.00 VES
 Won 5830.00 KRW
 Currency Fee
Yemeni rial 1252.00 YER
 Yuan renminbi 35.00 CNY
 Zambian kwacha 107.50 ZMW
 Currency Fee
 Currency Conversions:
 If you withdraw your balance in a currency other than the currency in which the balance on your account is
 denominated, you will additionally be charged currency conversion fees.
 Withdrawals through third party service providers
 Depending on the markets/regions in which your account is registered, you may be able to directly 
withdraw/transfer funds from or to your PayPal account to a linked local bank account or wallet 
through a third-party service provider. You will need to be registered with the third-party service 
provider to create and/or link a PayPal account to your local bank account or wallet. A currency 
conversion (and currency conversion fees) may also apply.
Bank account or wallet AE, AO, AZ, BF, BH, BI, BJ, BW, CD, CG, CI, CK, CM, CV, DJ, DZ, EG, ER, 
ET, GA, GM, GN, GW, JO, KE, KG, KM, KW, KZ, LS, MA, MG, ML, MR, MU, 
MW, MZ, NA, NE, NG, OM, QA, RW, SA, SC, SH, SL, SN, SO, ST, SZ, TD, 
TG, TJ, TM, TN, TZ, UG, YE, ZA, ZM, ZW
 2.0% + 
1.50 
USD*
 Withdrawal/Transfer 
to
 Market/Region Rate
 *
 Additional fees will be charged by your third-party service provider resulting in less than full amount being credited to your account.
 PayPal will bear no responsibility for any fees or costs (including lifting fees) imposed by the beneficiary financial service provider where
 you have your account into which you request the withdrawal, or its intermediary/correspondent bank.
 Included below are fees associated with events, requests, or actions that may happen when you 
use your account.
 Other Consumer Fees
 Other Fees
 Activity Description Rate
Bank Return on 
Withdrawal/Transfer out 
of PayPal
 This fee is charged when a withdrawal/transfer out of 
PayPal is attempted by a user and it fails because incorrect 
bank account information or delivery information is 
provided.
 See Bank Return on 
Transfer out of PayPal 
Table below.
 Credit Card and Debit 
Card Confirmation(s)
 Some users, in order to increase their sending limit or as 
PayPal may determine, may be charged a credit card and 
debit card link and confirmation fee. This amount will be 
refunded when you successfully complete the credit card 
or debit card verification process.
 See Credit Card and 
Debit Card Link and 
Confirmation Table 
below.
 Records Request This fee will apply for requests of information relating to 
why we had reasonable justification to refuse your 
payment order. We will not charge you for records 
requested in connection with your good-faith assertion of 
an error in your PayPal account.
 10.00 SGD or other 
currency equivalent 
(per item)
 Activity Description Rate
 Bank Return on Withdrawal/Transfer out of PayPal Table
HR & IS 3.00 EUR
 ID 50,000.00 IDR
 PH 250.00 PHP
 MY 15.00 MYR
 Market/Region Rate
 Credit Card and Debit Card Link and Confirmation Table
 Australian dollar 2.00 AUD
 Brazilian real 4.00 BRL
 Currency Rate
Canadian dollar 2.45 CAD
 Czech koruna 50.00 CZK
 Danish krone 12.50 DKK
 Euro 1.50 EUR
 Hong Kong dollar 15.00 HKD
 Hungarian forint 400.00 HUF
 Israeli new shekel 8.00 ILS
 Japanese yen 200.00 JPY
 Currency Rate
Malaysian ringgit 10.00 MYR
 Mexican peso 20.00 MXN
 Currency Rate
 New Taiwan dollar 70.00 TWD
 New Zealand dollar 3.00 NZD
 Norwegian krone 15.00 NOK
 Philippine peso 100.00 PHP
 Polish zloty 6.50 PLN
 Currency Rate
Russian ruble 60.00 RUB
 Singapore dollar 3.00 SGD
 Swedish krona 15.00 SEK
 Swiss franc 3.00 CHF
 Thai baht 70.00 THB
 UK pounds sterling 1.00 GBP
 US dollar 1.95 USD
 Currency Rate
        `
    },
    {
        id: 'merchant-fees',
        title: 'Merchant Fees',
        path: 'SOURCE_FILES/merchant-fees.txt',
        content: `
Last Updated: August 18, 2025
 You can find details about changes to our rates and fees and when they will apply on our
 Policy Updates Page or as otherwise required by the user agreement. You can also get to 
the 
Policy Updates Page by clicking ‘Legal’ at the bottom of any webpage and then 
selecting ‘Policy Updates'.
 Domestic
 A transaction occurring when both the sender and receiver are registered with or identified 
by PayPal as residents of the same market.
 International
 A transaction occurring when the sender and receiver are registered with or identified by 
PayPal as residents of different markets. Certain markets are grouped together when 
calculating international transaction rates. For a listing of our groupings, please access our 
Market/Region 
Grouping Table.
 Market Code Table
 We may refer to two-letter market codes throughout our fee pages. For a complete listing of 
PayPal market codes, please access our Market 
Relevant Market/Region
 Code Table.
 Rates published below apply to PayPal accounts of residents of the following market/region:
 Market/Region list
 United States (US)
 Commercial Transaction Rates
 When you accept the 
User Agreement to buy or sell goods or services or make any other 
commercial type of transaction, we call that a “commercial transaction”.
 Standard rate for receiving domestic transactions
Alternative Payment Method (APM) APM Transaction Rates Apply
 PayPal Checkout 3.49% + fixed fee
 PayPal Guest Checkout 3.49% + fixed fee
 QR code Transactions 2.29% + fixed fee
 QR code Transactions through third 
party integrator
 2.29% + 0.09 USD
 Pay with Venmo 3.49% + fixed fee
 Send/Receive Money for Goods and 
Services
 2.99%
 Standard Credit and Debit Card 
Payments
 2.99% + fixed fee
 PayPal Pay Later options 4.99% + fixed fee
 All Other Commercial Transactions 3.49% + fixed fee
 Payment Type Rate
Receiving international transactions
 The fee for receiving domestic transactions applies plus the additional percentage-based 
fee for international commercial transactions.
 Additional percentage-based fee for international commercial
 transactions
 All Commercial Transactions 1.50%
 Payment Type Rate
 Fixed fee for commercial transactions (based on currency received)
 Australian dollar 0.59 AUD
 Brazilian real 2.90 BRL
 Canadian dollar 0.59 CAD
 Czech koruna 9.00 CZK
 Danish krone 2.90 DKK
 Euro 0.39 EUR
 Currency Fee
Hong Kong dollar 3.79 HKD
 Hungarian forint 149.00 HUF
 Israeli new shekel 1.60 ILS
 Japanese yen 49.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 9.00 MXN
 Currency Fee
 New Taiwan dollar 14.00 TWD
 New Zealand dollar 0.69 NZD
 Norwegian krone 3.90 NOK
 Philippine peso 25.00 PHP
 Polish zloty 1.89 PLN
 Currency Fee
Russian ruble 39.00 RUB
 Singapore dollar 0.69 SGD
 Swedish krona 4.09 SEK
 Swiss franc 0.49 CHF
 Thai baht 15.00 THB
 UK pounds sterling 0.39 GBP
 US dollar 0.49 USD
 Currency Fee
 Fixed fee for QR code transactions (based on currency received)
 Australian dollar 0.12 AUD
 Brazilian real 0.50 BRL
 Canadian dollar 0.11 CAD
 Currency Fee
Czech koruna 1.90 CZK
 Danish krone 0.56 DKK
 Euro 0.07 EUR
 Hong Kong dollar 0.70 HKD
 Hungarian forint 29.00 HUF
 Israeli new shekel 0.30 ILS
 Japanese yen 9.00 JPY
 Malaysian ringgit 0.40 MYR
 Mexican peso 1.79 MXN
 Currency Fee
 New Taiwan dollar 3.00 TWD
 New Zealand dollar 0.13 NZD
 Currency Fee
Norwegian krone 0.77 NOK
 Philippine peso 4.40 PHP
 Polish zloty 0.34 PLN
 Russian ruble 6.90 RUB
 Singapore dollar 0.12 SGD
 Swedish krona 0.76 SEK
 Swiss franc 0.08 CHF
 Thai baht 2.90 THB
 UK pounds sterling 0.07 GBP
 US dollar 0.09 USD
 Currency Fee
 Other fees for using Commercial Transactions
 Activity Description Fee
Activity
 Description
 Fee
 Campaign Fee – 
Store Cash 
transactions
 All applicable PayPal transaction fees are 
calculated from the cart total, after any Store 
Cash offers being applied by the PayPal user. For 
more information about Campaign Fee 
calculations, please see the PayPal Store Cash 
Agreement.
 8.00%
 Buying, Selling, and Transferring Cryptocurrencies
Buying or selling a cryptocurrency using your business account
 There’s a fee for buying or selling Crypto Assets using your business account. The fee will 
vary based on the USD value of your Crypto Assets purchase or sale amount.
 The exchange rate you'll see before buying or selling Crypto Assets will also include a 
cryptocurrency conversion spread. There's no fee for holding Crypto Assets in your 
account.
 1.00 - 74.99 USD 2.20%
 75.00 - 200.00 USD 2.00%
 200.01 - 1000.00 USD 1.80%
 1000.01 USD + 1.50%
 Purchase or sale amount Fee
 The fees above do not apply to buying and selling PYUSD.
 Transferring a cryptocurrency using your business account
 Receiving a Crypto Asset transfer No Fee
 Transferring Crypto Asset to an 
address outside of PayPal or Venmo
 You will be charged a cryptocurrency 
network fee, payable in the Crypto 
Asset you transfer, which varies. For 
details on the network fee, see the 
PayPal Cryptocurrency Terms and 
Transfer Type Fee
Conditions. We will display such 
network fee right before you transfer 
any crypto
 Transfer Type Fee
 When you accept the User Agreement and send an invoice as a payment request for the 
sale of goods and services, and the customer sends you a payment via that invoice, we call 
that an “invoicing transaction.”
 Invoicing Transaction Rates
 Standard rate for receiving domestic invoicing transactions
 PayPal Checkout, Pay with Venmo, or 
PayPal Guest Checkout
 3.49% + fixed fee
 Standard Credit and Debit Card 
Payments, Apple Pay, or other third
party wallets
 2.99% + fixed fee
 PayPal Pay Later options 4.99% + fixed fee
 Payment Type through an 
Invoicing Transaction
 Rate
 Receiving international invoicing transactions
 The fee for receiving domestic Invoicing Transactions applies plus the additional 
percentage-based fee for international invoicing transactions.
Additional percentage-based fee for international invoicing transactions
 All Payment Types through Invoicing 
Transactions
 1.50%
 Payment Type through an 
Invoicing Transaction
 Rate
 Fixed fee for invoicing transactions (based on currency received)
 Australian dollar 0.59 AUD
 Brazilian real 2.90 BRL
 Canadian dollar 0.59 CAD
 Czech koruna 9.00 CZK
 Danish krone 2.90 DKK
 Euro 0.39 EUR
 Hong Kong dollar 3.79 HKD
 Hungarian forint 149.00 HUF
 Currency Fee
Israeli new shekel 1.60 ILS
 Japanese yen 49.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 9.00 MXN
 Currency Fee
 New Taiwan dollar 14.00 TWD
 New Zealand dollar 0.69 NZD
 Norwegian krone 3.90 NOK
 Philippine peso 25.00 PHP
 Polish zloty 1.89 PLN
 Russian ruble 39.00 RUB
 Singapore dollar 0.69 SGD
 Currency Fee
Swedish krona 4.09 SEK
 Swiss franc 0.49 CHF
 Thai baht 15.00 THB
 UK pounds sterling 0.39 GBP
 US dollar 0.49 USD
 Currency Fee
 Standard rate for Invoice Subscription Service
 As described in the Invoicing Terms and Conditions, if you subscribe to Invoice 
Subscription Service, the following applies:
 Invoicing Subscription 14.99 USD per month
 Service Type Rate
 When you use the Bill Pay for Business Accounts service to send funds to your Payees, we 
call that a “Bill Pay for Business Accounts Transaction”.
 Bill Pay for Business Accounts Transaction Rates
 Standard rates for funding a Bill Pay for Business Accounts Transaction
 The processing fee rate for funding a Bill Pay for Business Accounts Transaction is 2.9%; 
however, we provide certain discounts based on Funding Type, as follows:
PayPal Wallet – Bank Account Waived – No Fee
 PayPal Wallet – Balance Waived – No Fee
 PYUSD (subject to availability) Waived – No Fee
 Debit and Credit 2.9%
 Funding Type Rate
 Standard rates for disbursement of Bill Pay for Business Accounts
 Transactions
 For any of the following disbursement types involving a currency conversion by PayPal, the 
disbursement rate will also include a currency conversion spread.
 ACH – US Domestic 0.49 USD per transaction
 ACH – International Fixed Fee
 PayPal Wallet USD No Fee
 PayPal Wallet Other Currencies No Fee
 Venmo (subject to availability) No Fee
 Disbursement Type Rate
PYUSD (subject to availability) 1%
 Mailed Checks 2.00 USD per check
 Virtual Card (subject to availability) No Fee
 Instant Transfer (subject to availability) 1% (Minimum Fee of 2.00 USD, Maximum 
Fee of 50.00 USD)
 Pay faster by Check 20.00 USD
 Pay faster by ACH 1% (Minimum Fee of 2.00 USD, Maximum 
Fee of 50.00 USD)
 Wire Transfer Fixed Fee 
Disbursement Type Rate
 Fixed fee for ACH – International Disbursements
 Australian dollar 1.50 AUD
 Brazilian real 25.00 BRL
 Canadian dollar 1.50 CAD
 Currency Fee
Czech koruna 120.00 CZK
 Chinese yuan 36.00 CNY
 Danish krone 35.00 DKK
 Euro 0.90 EUR
 Hong Kong dollar 7.60 HKD
 Hungarian forint 1,900.00 HUF
 Israeli new shekel 20.00 ILS
 Indian rupee 420.00 INR
 Japanese yen 745.00 JPY
 Currency Fee
 Korean won 7,200.00 KRW
 Mexican peso 20.00 MXN
 Currency Fee
New Zealand dollar 8.60 NZD
 Norwegian krone 55.00 NOK
 Philippine peso 290.00 PHP
 Polish zloty 20.00 PLN
 Singapore dollar 6.95 SGD
 Swedish krona 55.00 SEK
 Swiss franc 4.45 CHF
 UK pounds sterling 0.75 GBP
 US dollar 0.95 USD
 Currency Fee
 Fixed fee for Wire Transfer Disbursements
 US dollar 20.00 USD
 Euro 19.00 EUR
 Currency Fee
Australian dollar 30.00 AUD
 Japanese yen 3,000.00 JPY
 Korean won 29,000.00 KRW
 Currency Fee
 Standard rate for Bill Pay for Business Accounts Subscription Service
 If you subscribe to the two-way accounting syncing service as part of Bill Pay for Business 
Accounts, the following applies:
 Bill Pay Two-Way Accounting Syncing 9.99 USD per month
 Service Type Rate
 When you accept the User Agreement to send or receive funds using one of the payment 
types listed below, we call that a “donation”. Funds sent or received through other products 
or services (not set out below) are not “donations” eligible for donations pricing. In such 
cases, the applicable transaction rates will apply and will be subject to the fees disclosed for 
such products or services on the applicable fees page.
 Receiving and Sending Donations
 Standard rate for receiving domestic donations
 Donate Button 2.89% + fixed fee
 Payment Type Rate
PayPal Checkout for Donations 2.89% + fixed fee
 Payment Type Rate
 Receiving international donations
 The applicable fee for receiving domestic donations applies plus the additional 
percentage-based fee for international donations.
 Additional percentage-based fee for international donations
 All Donations 1.50%
 Payment Type Rate
 Fixed fee for donations (based on currency received)
 Australian dollar 0.59 AUD
 Brazilian real 2.90 BRL
 Canadian dollar 0.59 CAD
 Czech koruna 9.00 CZK
 Currency Fee
Danish krone 2.90 DKK
 Euro 0.39 EUR
 Hong Kong dollar 3.79 HKD
 Hungarian forint 149.00 HUF
 Israeli new shekel 1.60 ILS
 Japanese yen 49.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 9.00 MXN
 Currency Fee
 New Taiwan dollar 14.00 TWD
 New Zealand dollar 0.69 NZD
 Norwegian krone 3.90 NOK
 Currency Fee
Philippine peso 25.00 PHP
 Polish zloty 1.89 PLN
 Russian ruble 39.00 RUB
 Singapore dollar 0.69 SGD
 Swedish krona 4.09 SEK
 Swiss franc 0.49 CHF
 Thai baht 15.00 THB
 UK pounds sterling 0.39 GBP
 US dollar 0.49 USD
 Currency Fee
 Standard rate for sending domestic donations
 Donations No fee
 Payment Type Rate
Standard rate for sending international donations
 The applicable fee for sending domestic donations applies plus the applicable additional 
percentage-based fee for international donations (international fee).
 Donations No fee (when no currency conversion 
is needed)
 Payment Type Rate
 Charity transaction rates are subject to eligibility, application, and pre-approval by PayPal, as 
further described in the Confirmed Charity Terms and Conditions. Once approved by 
PayPal, these rates will apply to certain payment types that are subject to the User 
Agreement.
 Charity Transaction Rates
 Receiving domestic charity transactions
 Charity Transactions 1.99% + fixed fee
 Payment Type Rate
 Receiving international charity transactions
 The fee for receiving domestic charity transactions applies plus the additional percentage
based fee for international charity transactions.
 Additional percentage-based fee for international charity transactions
 Payment Type Rate
Charity Transactions 1.50%
 Payment Type Rate
 Fixed fee for charity transactions (based on currency received)
 Australian dollar 0.59 AUD
 Brazilian real 2.90 BRL
 Canadian dollar 0.59 CAD
 Czech koruna 9.00 CZK
 Danish krone 2.90 DKK
 Euro 0.39 EUR
 Hong Kong dollar 3.79 HKD
 Hungarian forint 149.00 HUF
 Israeli new shekel 1.60 ILS
 Currency Fee
Japanese yen 49.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 9.00 MXN
 Currency Fee
 New Taiwan dollar 14.00 TWD
 New Zealand dollar 0.69 NZD
 Norwegian krone 3.90 NOK
 Philippine peso 25.00 PHP
 Polish zloty 1.89 PLN
 Russian ruble 39.00 RUB
 Singapore dollar 0.69 SGD
 Swedish krona 4.09 SEK
 Currency Fee
Swiss franc 0.49 CHF
 Thai baht 15.00 THB
 UK pounds sterling 0.39 GBP
 US dollar 0.49 USD
 Currency Fee
 We may allow your customers to choose any of the alternative payment methods (APMs) 
listed in our APM agreement at checkout to pay you for purchases.
 For a complete listing of the APMs we support, please see Annex 1 of the APM agreement. 
You must accept the terms of the APM agreement before receiving APM payments.
 Alternative Payment Method Rates
 Standard rate for receiving domestic transactions
 Alternative Payment Method (APM) 2.89% + fixed fee
 Alternative Payment Method (APM) 
through Pay Links and Buttons, 
Payment Links and Buttons, Payment 
Links, Buy Buttons, Shopping Cart 
Buttons
 2.99% + fixed fee
 Payment Type Rate
Receiving international transactions
 The fee for receiving domestic transactions applies plus the additional percentage-based 
fee for international transactions.
 Additional percentage-based fee for international APM transactions
 Alternative Payment Method (APM) 1.50%
 Payment Type Fee
 Fixed fee for APM transactions (based on currency received)
 Australian dollar 0.39 AUD
 Brazilian real 1.70 BRL
 Canadian dollar 0.39 CAD
 Czech koruna 5.00 CZK
 Danish krone 1.70 DKK
 Euro 0.19 EUR
 Hong Kong dollar 2.29 HKD
 Currency Fee
Hungarian forint 89.00 HUF
 Israeli new shekel 0.90 ILS
 Japanese yen 29.00 JPY
 Malaysian ringgit 1.20 MYR
 Mexican peso 5.00 MXN
 Currency Fee
 New Taiwan dollar 8.00 TWD
 New Zealand dollar 0.49 NZD
 Norwegian krone 2.30 NOK
 Philippine peso 15.00 PHP
 Polish zloty 1.09 PLN
 Russian ruble 23.00 RUB
 Currency Fee
Singapore dollar 0.49 SGD
 Swedish krona 2.40 SEK
 Swiss franc 0.29 CHF
 Thai baht 9.00 THB
 UK pounds sterling 0.19 GBP
 US dollar 0.29 USD
 Currency Fee
 Fixed fee for APM transactions through Pay Links and Buttons, Payment
 Links and Buttons, Payment Links, Buy Buttons, Shopping Cart Buttons
 (based on currency received)
 Australian dollar 0.59 AUD
 Brazilian real 2.90 BRL
 Canadian dollar 0.59 CAD
 Czech koruna 9.00 CZK
 Currency Fee
Danish krone 2.90 DKK
 Euro 0.39 EUR
 Hong Kong dollar 3.79 HKD
 Hungarian forint 149.00 HUF
 Israeli new shekel 1.60 ILS
 Japanese yen 49.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 9.00 MXN
 Currency Fee
 New Taiwan dollar 14.00 TWD
 New Zealand dollar 0.69 NZD
 Norwegian krone 3.90 NOK
 Currency Fee
Philippine peso 25.00 PHP
 Polish zloty 1.89 PLN
 Russian ruble 39.00 RUB
 Singapore dollar 0.69 SGD
 Swedish krona 4.09 SEK
 Swiss franc 0.49 CHF
 Thai baht 15.00 THB
 UK pounds sterling 0.39 GBP
 US dollar 0.49 USD
 Currency Fee
 When you enable the option to allow your customers to pay in cryptocurrency, we call that 
“pay with crypto.”
 Pay With Crypto
 Rate until July 31, 2026 0.99% of transaction amount
Rate on or after Aug. 1, 2026 1.5% of transaction amount
 PayPal offers a balance holding account commonly referred to as PayPal Balance.
 For more information and a complete listing of fees associated, please refer to the PayPal 
Balance Terms and Conditions.
 PayPal Balance
 Use of applicable Services is subject to eligibility, application, and approval by PayPal and 
your acceptance of the PayPal Online Payment Services Agreement. These rates will apply 
to the following payment types received using PayPal Online Payment Services.
 Capitalized terms in this section are defined in the PayPal Online Payment Services 
Agreement.
 PayPal Online Payment Services
 Receiving domestic transactions using PayPal Online Payment Services
 Advanced Credit and Debit Card 
Payments
 2.89% + fixed fee
 ACH Services 0.80% (capped at $5.00 per 
transaction)
 Payments Advanced 2.89% + fixed fee
 Payments Pro 2.89% + fixed fee
 Payment Type Rate
Virtual Terminal 3.39% + fixed fee
 Payment Type Rate
 Charity rates for receiving transactions using PayPal Card Payment
 Services
 Charity rates for receiving transactions using the below PayPal Card Payment Services are 
subject to eligibility, application, and pre-approval by PayPal, as further described in the 
Confirmed Charity Terms and Conditions. See our PayPal Online Payment Services 
Agreement for more details about the below services.
 Payments Pro 1.99% + fixed fee
 Virtual Terminal 2.69% + fixed fee
 Advanced Credit and Debit Card 
Payments
 2.19% + fixed fee
 Advanced Credit and Debit Card 
Payments (Interchange Plus Plus)
 Interchange Plus Plus Rates Apply
 Payment Type Rate
 Fixed fee for PayPal Card Payment Services transactions for Payments
 Advanced and Payments Pro (based on currency received)
 Currency Fee
Australian dollar 0.59 AUD
 Brazilian real 2.90 BRL
 Canadian dollar 0.59 CAD
 Czech koruna 9.00 CZK
 Danish krone 2.90 DKK
 Euro 0.39 EUR
 Hong Kong dollar 3.79 HKD
 Hungarian forint 149.00 HUF
 Israeli new shekel 1.60 ILS
 Japanese yen 49.00 JPY
 Malaysian ringgit 2.00 MYR
 Mexican peso 9.00 MXN
 Currency Fee
New Taiwan dollar 14.00 TWD
 New Zealand dollar 0.69 NZD
 Norwegian krone 3.90 NOK
 Philippine peso 25.00 PHP
 Polish zloty 1.89 PLN
 Russian ruble 39.00 RUB
 Singapore dollar 0.69 SGD
 Swedish krona 4.09 SEK
 Swiss franc 0.49 CHF
 Thai baht 15.00 THB
 UK pounds sterling 0.39 GBP
 US dollar 0.49 USD
 Currency Fee
Fixed fee for PayPal Card Payment Services transactions for Advanced
 Credit and Debit Card Payments and Virtual Terminal (based on currency
 received)
 Australian dollar 0.39 AUD
 Brazilian real 1.70 BRL
 Canadian dollar 0.39 CAD
 Czech koruna 5.00 CZK
 Danish krone 1.70 DKK
 Euro 0.19 EUR
 Hong Kong dollar 2.29 HKD
 Hungarian forint 89.00 HUF
 Israeli new shekel 0.90 ILS
 Japanese yen 29.00 JPY
 Malaysian ringgit 1.20 MYR
 Mexican peso 5.00 MXN
 Currency Fee
New Taiwan dollar 8.00 TWD
 New Zealand dollar 0.49 NZD
 Norwegian krone 2.30 NOK
 Philippine peso 15.00 PHP
 Polish zloty 1.09 PLN
 Russian ruble 23.00 RUB
 Singapore dollar 0.49 SGD
 Swedish krona 2.40 SEK
 Swiss franc 0.29 CHF
 Thai baht 9.00 THB
 UK pounds sterling 0.19 GBP
 US dollar 0.29 USD
 Currency Fee
Interchange Plus Plus fee structure for PayPal Card Payment Services
 transactions
 Subject to activation in your account settings and your acceptance of the PayPal Online 
Payment Services Agreement, the following alternative fee structure may apply to eligible 
Payment Types.
 Advanced Credit and Debit Card 
Payments (Interchange Plus Plus)
 Interchange Pass-through Costs + 
0.49% + fixed fee (collectively 
“Interchange Plus Plus”)
 Payment Type Rate
 Interchange Plus Plus Fixed fee for PayPal Card Payment Services
 transactions (based on currency received)
 Australian dollar 0.49 AUD
 Brazilian real 2.29 BRL
 Canadian dollar 0.49 CAD
 Czech koruna 7.00 CZK
 Danish krone 2.29 DKK
 Euro 0.29 EUR
 Currency Fee
Hong Kong dollar 2.99 HKD
 Hungarian forint 119.00 HUF
 Israeli new shekel 1.29 ILS
 Japanese yen 39.00 JPY
 Malaysian ringgit 1.59 MYR
 Mexican peso 7.00 MXN
 Currency Fee
 New Taiwan dollar 11.00 TWD
 New Zealand dollar 0.59 NZD
 Norwegian krone 3.09 NOK
 Philippine peso 20.00 PHP
 Polish zloty 1.49 PLN
 Currency Fee
Russian ruble 31.00 RUB
 Singapore dollar 0.59 SGD
 Swedish krona 3.29 SEK
 Swiss franc 0.39 CHF
 Thai baht 12.00 THB
 UK pounds sterling 0.29 GBP
 US dollar 0.39 USD
 Currency Fee
 Receiving international transactions using PayPal Card Payment Services
 The fee for receiving domestic PayPal Card Payment Services transactions applies plus the 
additional percentage-based fee for international PayPal Card Payment Services 
transactions.
 Additional percentage-based fee for international PayPal Card Payment
 Services transactions
 Payment Type Rate
Advanced Credit and Debit Card 
Payments (Interchange Plus Plus)
 No additional percentage-based fee 
for international transactions for this 
Payment Type
 All Other PayPal Card Payment 
Services Transactions
 1.50%
 Payment Type Rate
 Other fees for using PayPal Online Payment Services
 Account 
Monitoring 
Service
 Optional Service
 29.95 USD set up
 fee
 19.95 USD per
 month
 ACH Services 
Return Fee or 
Unauthorized 
Fee
 This fee is charged when a return is 
requested or when the transaction 
is unauthorized and then 
rejected/reversed.
 5.00 USD Return
 Fee for each
 transaction
 returned by the
 banking network
 5.00 USD
 Unauthorized
 Fee for each
 transaction
 disputed by your
 customer as
 unauthorized
 Activity Description Fee
Fraud 
Protection 
Advanced
 Optional Service
 0.07 USD per
 transaction
 Additional Risk 
Factors
 If PayPal determines that your 
Account receives, or is likely to 
receive a disproportionately higher 
number of customer complaints, 
reversals, chargebacks, claims, or 
other indicators of a serious level 
of risk, PayPal may increase the 
percentage components of your 
Transaction Fees after giving you 
30 days prior notice of the 
increase.
 Up to 5.00% per 
transaction
 Buyer 
Authentication 
Service
 Optional Service
 10.00 USD per
 month
 0.10 USD per
 transaction
 Card 
Verification 
Transactions
 For each account verification 
request
 0.30 USD
 Chargeback 
Protection Tools
 Chargeback Protection Tool
 Advanced Credit and Debit Card
 Payments
 0.40% per 
transaction
 Activity Description Fee
Effortless Chargeback Protection Tool
 Advanced Credit and Debit Card
 Payments
 0.60% per 
transaction
 Failure to 
implement 
Express 
Checkout
 If you do not implement Express 
Checkout as required, the 
percentage components of your 
Transaction Fees may increase 
after giving you 30 days prior 
notice.
 1.00% per 
transaction
 Monthly Fees
 Advanced Credit and Debit Card 
Payments and ACH Services
 No fee
 Payments Advanced 5.00 USD
 Payments Pro 30.00 USD
 Payments Pro Payflow 30.00 USD
 Virtual Terminal 30.00 USD
 Recurring Billing Optional Service 10.00 USD per 
month
 Recurring 
Payment Tool
 Optional Service 30.00 USD per 
month
 Activity Description Fee
Uncaptured 
Authorization 
Transactions
 For each successful but 
uncaptured authorization 
transaction.
 0.30 USD
 Activity Description Fee
 Payflow Pro gives you the flexibility to design a checkout page that matches your site’s 
branding, and Payflow Link comes with a pre-built checkout template you embed right into 
your checkout page. With either, your customers can pay by credit card without leaving your 
site. For more information, please refer to the Payflow Gateway Services Agreement.
 Payflow Pro (Payment Gateway)
 Receiving transactions using Payflow
 Payflow Pro Transaction 0.10 USD
 Payflow Link Transaction 0.10 USD
 Payment type Fee
 Other fees for using Payflow
 Monthly Fees Payflow Pro 25.00 
USD
 Activity Description Fee
Payflow Link No fee
 PayPal Recurring Billing Service (Monthly)
 Payflow Pro 10.00 
USD
 Payflow Link 10.00 
USD
 PayPal Fraud Protection Services (Monthly)
 Basic Package No fee
 Advanced Package 10.00 
USD
 Buyer 
Authentication +
 10.00 
USD
 PayPal Fraud Protection Services (Monthly 
Excess Transaction Fee)
 Basic Package No fee
 Advanced Package 0.05 
USD
 Buyer 
Authentication +
 0.10 
USD
 Recurring Billing 
Service
 No fee
 Activity Description Fee
Use of PayPal Zettle is subject to eligibility, application, approval by PayPal and your 
acceptance of the PayPal Zettle agreement. These rates will apply to the following payment 
types received using PayPal Zettle.
 PayPal Zettle Rates
 Standard rate for receiving transactions using PayPal Zettle
 Card Present Transactions 2.29% + 0.09 USD
 Manual Card Entry Transactions 3.49% + 0.09 USD
 QR code Transactions 2.29% + 0.09 USD
 Payment links: PayPal Checkout, Pay 
with Venmo, PayPal Pay Later offers, or 
PayPal Guest Checkout
 3.49% + 0.49 USD
 Payment links: Standard Credit and 
Debit Card Payments, Apple Pay, or 
other third-party wallets
 2.99% + 0.49 USD
 Payment Type Rate
 PayPal Payouts (which includes the service formerly known as Mass Pay) allows you to easily 
send payments to multiple recipients at once. We charge you a fee for each payment you 
send using PayPal Payouts. The fee is based on the type of payment and currency in which it 
is sent.
 PayPal Payouts
 Sending PayPal Payouts
US 2% of total transaction amount (not to 
exceed the maximum fee cap below)
 US
 When using the Payouts API
 Flat Rate (see fee table below)
 International PayPal Payouts 2% of total transaction amount (not to 
exceed the maximum fee cap below)
 Transaction Rate
 Fee and maximum fee cap for PayPal Payouts
 Based on payment currency:
 Australian 
dollar
 1.25 AUD 0.32 AUD 24.00 AUD
 Brazilian real 2.00 BRL 0.50 BRL 40.00 BRL
 Canadian 
dollar
 1.25 CAD 0.32 CAD 24.00 CAD
 Currency US 
Maximum 
Fee Cap
 US – When 
using the 
Payouts API 
Fee
 International 
Maximum Fee 
Cap
Czech 
koruna
 24.00 CZK 6.00 CZK 400.00 CZK
 Danish krone 6.00 DKK 1.50 DKK 120.00 DKK
 Euro 0.85 EUR 0.22 EUR 16.00 EUR
 Hong Kong 
dollar
 7.00 HKD 1.75 HKD 160.00 HKD
 Hungarian 
forint
 210.00 HUF 53.00 HUF 6000.00 HUF
 Israeli new 
shekel
 4.00 ILS 1.00 ILS 80.00 ILS
 Japanese 
yen
 120.00 JPY 30.00 JPY 2000.00 JPY
 Malaysian 
ringgit
 4.00 MYR Not Applicable 80.00 MYR
 Mexican 
peso
 11.00 MXN 2.75 MXN 300.00 MXN
 Currency US 
Maximum 
Fee Cap
 US – When 
using the 
Payouts API 
Fee
 International 
Maximum Fee 
Cap
New Taiwan 
dollar
 33.00 TWD 8.00 TWD 800.00 TWD
 New Zealand 
dollar
 1.50 NZD 0.38 NZD 30.00 NZD
 Norwegian 
krone
 6.75 NOK 1.70 NOK 120.00 NOK
 Philippine 
peso
 50.00 PHP 12.50 PHP 1000.00 PHP
 Polish zloty 3.00 PLN 0.75 PLN 60.00 PLN
 Russian 
ruble
 30.00 RUB 60.00 RUB 600.00 RUB
 Singapore 
dollar
 1.60 SGD 0.40 SGD 32.00 SGD
 Swedish 
krona
 9.00 SEK 2.25 SEK 160.00 SEK
 Swiss franc 1.30 CHF 0.33 CHF 20.00 CHF
 Currency US 
Maximum 
Fee Cap
 US – When 
using the 
Payouts API 
Fee
 International 
Maximum Fee 
Cap
Thai baht 36.00 THB 9.00 THB 800.00 THB
 UK pounds 
sterling
 0.65 GBP 0.17 GBP 14.00 GBP
 US dollar 1.00 USD 0.25 USD 20.00 USD
 Currency US 
Maximum 
Fee Cap
 US – When 
using the 
Payouts API 
Fee
 International 
Maximum Fee 
Cap
 When you accept the User Agreement, you may apply to receive Micropayments pricing for 
certain lower value transactions processed through your PayPal account. The rate below 
applies to both Dynamic and Static Micropayments.
 Micropayments
 Receiving domestic micropayments
 US 4.99% + fixed fee
 Payment Type Rate
 Receiving international transactions
 The fee for receiving domestic transactions applies plus the additional percentage-based 
fee for international transactions.
 Additional percentage-based fee for international Micropayment
 transactions
Micropayments 1.50%
 Payment Type Rate
 Micropayments fixed fee
 Based on payment currency:
 Australian dollar 0.12 AUD
 Brazilian real 0.50 BRL
 Canadian dollar 0.11 CAD
 Czech koruna 1.90 CZK
 Danish krone 0.56 DKK
 Euro 0.07 EUR
 Hong Kong dollar 0.70 HKD
 Hungarian forint 29.00 HUF
 Israeli new shekel 0.30 ILS
 Currency Fee
Japanese yen 9.00 JPY
 Malaysian ringgit 0.40 MYR
 Mexican peso 1.79 MXN
 Currency Fee
 New Taiwan dollar 3.00 TWD
 New Zealand dollar 0.13 NZD
 Norwegian krone 0.77 NOK
 Philippine peso 4.40 PHP
 Polish zloty 0.34 PLN
 Russian ruble 6.90 RUB
 Singapore dollar 0.12 SGD
 Swedish krona 0.76 SEK
 Currency Fee
Swiss franc 0.08 CHF
 Thai baht 2.90 THB
 UK pounds sterling 0.07 GBP
 US dollar 0.09 USD
 Currency Fee
 For transactions that are not processed either through a buyer’s PayPal account or through a 
guest checkout, we assess a settlement fee to sellers for credit and debit card transaction 
chargebacks (a chargeback may occur when a buyer rejects or reverses a charge on his or 
her card through the card issuer).
 For Chargeback Protection Services applicable to PayPal’s Card Payment Services, please 
see the PayPal Online Payment Services Agreement.
 The chargeback fee is based on the currency received as follows:
 Chargeback Fees
 Chargeback fees
 Australian dollar 22.00 AUD
 Brazilian real 35.00 BRL
 Canadian dollar 20.00 CAD
 Currency Fee
Czech koruna 400.00 CZK
 Danish krone 120.00 DKK
 Euro 16.00 EUR
 Hong Kong dollar 155.00 HKD
 Hungarian forint 4,325.00 HUF
 Israeli new shekel 75.00 ILS
 Japanese yen 1,875.00 JPY
 Malaysian ringgit 65.00 MYR
 Mexican peso 250.00 MXN
 Currency Fee
 New Taiwan dollar 625.00 TWD
 New Zealand dollar 28.00 NZD
 Currency Fee
Norwegian krone 125.00 NOK
 Philippine peso 900.00 PHP
 Polish zloty 65.00 PLN
 Russian ruble 640.00 RUB
 Singapore dollar 28.00 SGD
 Swedish krona 150.00 SEK
 Swiss franc 22.00 CHF
 Thai baht 650.00 THB
 UK pounds sterling 14.00 GBP
 US dollar 20.00 USD
 Currency Fee
 We may charge a Dispute Fee when a buyer files a dispute claim or chargeback for a 
transaction that was processed through the buyer’s PayPal account or a PayPal checkout 
solution. Please see the User Agreement for more information about Standard and High 
Volume Dispute fees.
 Dispute fees will be applied in the currency of the original transaction.
 Dispute Fees
Standard Dispute Fees
 Australian dollar 25.00 AUD
 Brazilian real 65.00 BRL
 Canadian dollar 20.00 CAD
 Czech koruna 350.00 CZK
 Danish krone 100.00 DKK
 Euro 14.00 EUR
 Hong Kong dollar 115.00 HKD
 Hungarian forint 4,585.00 HUF
 Indian Rupee 1080.00 INR
 Israeli new shekel 55.00 ILS
 Japanese yen 1,630.00 JPY
 Malaysian ringgit 65.00 MYR
 Currency Fee
Mexican peso 300.00 MXN
 Currency Fee
 New Taiwan dollar 455.00 TWD
 New Zealand dollar 25.00 NZD
 Norwegian krone 140.00 NOK
 Philippine peso 760.00 PHP
 Polish zloty 60.00 PLN
 Russian ruble 1125.00 RUB
 Singapore dollar 20.00 SGD
 Swedish krona 145.00 SEK
 Swiss franc 15.00 CHF
 Thai baht 465.00 THB
 Currency Fee
UK pounds sterling 12.00 GBP
 US dollar 15.00 USD
 Currency Fee
 High Volume Dispute Fees
 Australian dollar 50.00 AUD
 Brazilian real 130.00 BRL
 Canadian dollar 40.00 CAD
 Czech koruna 700.00 CZK
 Danish krone 200.00 DKK
 Euro 28.00 EUR
 Hong Kong dollar 230.00 HKD
 Hungarian forint 9,170.00 HUF
 Currency Fee
Indian Rupee 2160.00 INR
 Israeli new shekel 110.00 ILS
 Japanese yen 3,260.00 JPY
 Malaysian ringgit 130.00 MYR
 Mexican peso 600.00 MXN
 Currency Fee
 New Taiwan dollar 910.00 TWD
 New Zealand dollar 50.00 NZD
 Norwegian krone 280.00 NOK
 Philippine peso 1520.00 PHP
 Polish zloty 120.00 PLN
 Russian ruble 2250.00 RUB
 Currency Fee
Singapore dollar 40.00 SGD
 Swedish krona 290.00 SEK
 Swiss franc 30.00 CHF
 Thai baht 930.00 THB
 UK pounds sterling 24.00 GBP
 US dollar 30.00 USD
 Currency Fee
 For any of the following types of transactions involving a currency conversion by PayPal, the 
transaction exchange rate will also include a currency conversion spread.
 Currency Conversions
 Converting payments in another currency
 Paying for goods or services in a
 currency other than the currency the
 goods or services are listed in.
 Sending money to a friend or family
 member such that they receive a
 different currency from the currency
 in which you pay.
 4.00%, or such other amount as may 
be disclosed to you during the 
transaction.
 Type of Transaction Currency Conversion Spread
Sending money using PayPal
 Payouts such that your recipients
 receive a different currency from the
 currency in which you pay.
 All other transactions
 3.00%, or such other amount as may 
be disclosed to you during the 
transaction.
 Type of Transaction Currency Conversion Spread
 Sometimes the sender of a payment you receive may use an E-check as a means of funding 
that payment from their bank account, in order to send it from their PayPal account. Please 
see the user agreement for more information about E-check. When you receive an E-check 
funded payment we apply the fee you agreed to pay to receive the payment up to a 
monetary cap indicated below (based on the currency received):
 E-check Fees
 Receiving E-check fees
 Per each payment transaction Commercial Transaction Rates
 Payment Type Rate
 Maximum fee cap for E-checks
 Currency Maximum fee cap
Australian dollar 300.00 AUD
 Brazilian real 500.00 BRL
 Canadian dollar 300.00 CAD
 Czech koruna 5000.00 CZK
 Danish krone 1500.00 DKK
 Euro 200.00 EUR
 Hong Kong dollar 2500.00 HKD
 Hungarian forint 54,000.00 HUF
 Israeli new shekel 1100.00 ILS
 Japanese yen 24,000.00 JPY
 Malaysian ringgit 1000.00 MYR
 Mexican peso 3500.00 MXN
 New Taiwan dollar 9000.00 TWD
 Currency Maximum fee cap
New Zealand dollar 400.00 NZD
 Norwegian krone 1600.00 NOK
 Philippine peso 13,000.00 PHP
 Polish zloty 800.00 PLN
 Russian ruble 12,000.00 RUB
 Singapore dollar 400.00 SGD
 Swedish krona 1800.00 SEK
 Swiss franc 300.00 CHF
 Thai baht 9000.00 THB
 UK pounds sterling 200.00 GBP
 US dollar 300.00 USD
 Currency Maximum fee cap
 You can typically withdraw money out of PayPal by standard withdrawals/transfers to your 
linked bank account or eligible cards. A currency conversion (and currency conversion 
Withdrawal Out of PayPal
spread) may also apply.
 Withdrawing a balance from a PayPal business account
 Bank account
 Standard
 With eligible linked bank
 account
 No Fee (when no 
currency 
conversion is 
involved)
 Instant
 Withdrawal limits apply
 1.50% of amount 
transferred
 Minimum fee 
applies based 
on the card 
withdrawal 
currency, in 
the table 
below
 Cards Standard
 With eligible linked debit
 card
 Withdrawal limits apply
 No Fee (when no 
currency 
conversion is 
involved)
 Instant
 With eligible linked debit
 card
 Withdrawal limits apply
 1.50% of amount 
transferred
 Minimum fee 
applies based 
on the card 
withdrawal 
currency, in 
Withdrawal/Transfer 
to
 Withdrawal/Transfer 
Type
 Rate
the table 
below
 Withdrawal/Transfer 
to
 Withdrawal/Transfer 
Type
 Rate
 Withdrawal Limits – Instant Transfer for Bank
 Per transaction 25,000.00 USD
 Frequency Maximum (up to)
 Withdrawal Limits – Standard and Instant Transfers for Cards
 Per transaction 50,000.00 USD
 Per day 100,000.00 USD
 Per week 250,000.00 USD
 Per month 500,000.00 USD
 Frequency Maximum (up to)
 Minimum fee – Instant Transfer
 Based on withdrawal currency:
US dollar 0.50 USD
 Currency Minimum Fee
 Included below are fees associated with events, requests, or actions that may happen when 
you use your account.
 Other Merchant Fees
 Other Fees
 Bank Return on 
Withdrawal/Transfer 
out of PayPal
 This fee is charged when a 
withdrawal/transfer out of 
PayPal is attempted by a 
user and it fails because 
incorrect bank account 
information or delivery 
information is provided.
 No Fee
 Activity Description Fee
Commercial 
Transaction and 
Invoicing Transaction 
Refunds
 Full Refunds
 If you refund a
 Commercial
 Transaction or an
 Invoicing
 Transaction
 payment, there are
 no fees to make
 the refund, but the
 fees you originally
 paid to receive the
 payment are not
 returned to you.
 Partial Refunds
 If you refund a
 Commercial
 Transaction or an
 Invoicing
 Transaction
 payment, there are
 no fees to make
 the refund, but the
 fees you originally
 paid to receive the
 payment are not
 returned to you.
 Credit Card and 
Debit Card 
Confirmation(s)
 Some users, in order to 
increase their sending limit 
or as PayPal may determine, 
may be charged a Credit 
Card and Debit Card Link 
and Confirmation fee. This 
amount will be refunded 
when you successfully 
See Credit Card and 
Debit Card Link and 
Confirmation Table 
below.
 Activity Description Fee
complete the credit card or 
debit card verification 
process.
 PayPal Business 
Debit MasterCard
 Use of the PayPal Business 
Debit MasterCard is subject 
to eligibility, application, 
approval by PayPal and your 
acceptance of the terms.
 Please see our 
PayPal Business 
Debit MasterCard 
Cardholder 
Agreement and 
Privacy Notice
 PayPal Debit 
MasterCard
 Use of the PayPal Debit 
MasterCard is subject to 
eligibility, application, 
approval by PayPal and your 
acceptance of the terms.
 Please see our 
PayPal Debit 
MasterCard 
Cardholder 
Agreement
 Activity Description Fee
 Credit Card and Debit Card Link and Confirmation Table
 Australian dollar 2.00 AUD
 Brazilian real 4.00 BRL
 Canadian dollar 2.45 CAD
 Czech koruna 50.00 CZK
 Currency Fee
Danish krone 12.50 DKK
 Euro 1.50 EUR
 Hong Kong dollar 15.00 HKD
 Hungarian forint 400.00 HUF
 Israeli new shekel 8.00 ILS
 Japanese yen 200.00 JPY
 Malaysian ringgit Not Applicable
 Mexican peso 20.00 MXN
 Currency Fee
 New Taiwan dollar 70.00 TWD
 New Zealand dollar 3.00 NZD
 Norwegian krone 15.00 NOK
 Currency Fee
Philippine peso 100.00 PHP
 Polish zloty 6.50 PLN
 Russian ruble 60.00 RUB
 Singapore dollar 3.00 SGD
 Swedish krona 15.00 SEK
 Swiss franc 3.00 CHF
 Thai baht 70.00 THB
 UK pounds sterling 1.00 GBP
 US dollar 1.95 USD
 Currency Fee
        `
    },
    {
        id: 'privacy-statement',
        title: 'Privacy Statement',
        path: 'SOURCE_FILES/Privacy-Statement.txt',
        content: `
Privacy Statement
Last updated on 30 September 2025

1. Overview
PayPal Pte. Ltd, a Singapore private limited company whose address is 5 Temasek Boulevard #09-01, Suntec Tower Five, Singapore 038985 (we, our, us, PayPal) has developed this Privacy Statement to explain how we may collect, retain, process, share and transfer your Personal Data when you visit our Sites or use our Services. This Privacy Statement applies to your Personal Data when you visit Sites or use your PayPal account, Xoom account, visit our websites, apply for or use our Services (collectively, the Services), and does not apply to online websites or services that we do not own or control, including websites or services of other PayPal Users. This Privacy Statement does not apply to Other Services, such as Hyperwallet.

This Privacy Statement is designed to help you obtain information about our privacy practices and to help you understand your privacy choices when you use our Sites and Services. Please note that our Service offerings may vary by region.

We have defined some terms that we use throughout the Privacy Statement. You can find the meaning of a capitalized term in the Definitions section below.

Please contact us if you have questions about our privacy practices that are not addressed in this Privacy Statement.

2. What Personal Data Do We Collect?
We may collect information about you when you visit our Sites or use our Services, including the following:

Registration and use information – When you register to use our Services, we will collect Personal Data as necessary to offer and fulfill the Services you request. Depending on the Services you choose, we may require you to provide us with your name, postal address, telephone number, email address and identification information to establish an account or profile. We may require you to provide us with additional Personal Data as you use our Services.
Transaction and experience information – When you use our Services or access our Sites, for example, to make purchases from Partners and Merchants, to receive money, to process payments, or to send money to friends and family, we collect information about the transaction, as well as other information associated with the transaction such as amount sent or requested, amount paid for products or services, Partner and Merchant information, including information about any funding instruments used to complete the transaction, Device Information, Technical Usage Data, and Geolocation Information.
Participant information – When you use our Services or access our Sites, we collect Personal Data you provide us about the other participants associated with the transaction.
Send or request money: When you send or request money through the Services, we collect Personal Data such as name, postal address, telephone number, and financial account information about the participant who is receiving money from you or sending money to you. The extent of Personal Data required about a participant may vary depending on the Services you are using to send or request money.
Pay or request someone else to pay a bill:  If you use our Services to pay a bill for the benefit of someone else, or if you request a User to pay a bill for you, we collect Personal Data from you about the account holder such as name, postal address, telephone number, email address, and account number of the bill that you intend to pay or request to be paid.
Add value to your accounts:  If you use our Services to add value to your account or any other account you may have, or if you ask a User to add value to any of these accounts, we may collect Personal Data from you about the other party, or from the other party about you to facilitate the request. For example, if you use our Services to reload a mobile phone, or to request value be added to your mobile account, we may collect Personal Data and other information including mobile account number from the other participant.
Biometric: When you consent in the user experience, we collect, use and store biometric data, being voice identification, photo identification, or face scans to verify your identity and for account authentication checks including, for example, verify your identity and authenticate you to meet regulatory requirements or before you access accounts and Services, recover passwords, update profile info, manage payments and payment methods, or lift account limitations.
Information about your public profile and your friends and contacts – It may be easier for us to help you transact with your friends and contacts if you choose to connect your contact list information with your account or if your account profile is publicly available. If you establish an account connection between your device or a social media platform and your account, we will use your contact list information (such as name, address, email address) to improve your experience when you use the Services. When your account profile is public, other users can find your profile to send you money by searching for you by name, username, email, or mobile number on PayPal and confirm it’s you by viewing your photo. You can make your account profile private anytime in your PayPal.me settings.
Information that you choose to provide us to obtain additional Services or specific online Services – If you request or participate in an optional Site feature, or request enhanced Services or other elective functionality, we may collect additional information from you. We will provide you with a separate notice at the time of collection, if the use of that information differs from the uses disclosed in this Privacy Statement.
Personal Data about you if you use Unbranded Payment Services – certain Services are available without being required to log in to or establish an account. We will collect Personal Data when you are interacting with and making payments to Partners and Merchants using our card payment services that do not carry the PayPal brand and when you checkout with PayPal without logging into an account. For our Unbranded Payment Services, your interaction is with the merchant, on their platform. If you are an account holder, or create an account at a later date, we may collect information about unbranded transactions and associate them with your account to improve your customer experience as an account holder and for compliance and analytics purposes. If you are not an account holder, we will collect and store all information you provide and use such information in accordance with this Privacy Statement.
Information about you from third-party sources – We obtain information from third-party sources such as Partners and Merchants, data providers, and credit bureaus, where permitted by law.
Inferred Data – We may derive inferences from your transactions and personal data when you use the Services. We do this, for example, to help keep your account and profile secure and protect your use of the Services from fraud. We may draw inferences that reflect your behaviour patterns and personal preferences, browsing and purchasing habits, and creditworthiness.
Biometric information– When you consent in the user experience, we collect, use and store biometric data, being voice identification, photo identification, or face scans to verify your identity and for account authentication checks including, for example, verify your identity and authenticate you to meet regulatory requirements or before you access accounts and Services, recover passwords, update profile info, manage payments and payment methods, or lift account limitations.
Other information we collect related to your use of our Sites or Services – We may collect additional information from or about you when you communicate with us, contact our customer support teams or respond to a survey.
3. Non-Account holders and Fastlane Profile Users
If you use our Services without creating or logging into an account, such as when you use our Pay Without a PayPal account, use Unbranded Payment Services (e.g. Braintree), use PayPal Groups, or use a Fastlane profile, we'll still collect personal data, which may include your payment information, device information, and location. When you use our Services without creating or logging into an account, we will use this information to process transactions, prevent fraud and comply with the law. We may connect this information with your account, if you have one or if you create an account at a later date.

With a Fastlane profile, individuals can store their payment methods and other Personal Data with PayPal so that they can complete the checkout process faster, create a store or loyalty account, or facilitate other transactions at participating Partners and Merchants with payment card, contact information, shipping data or other data they save in their Fastlane profile as relevant to the specific interaction, participating Partner or Merchant, all without having to manually input payment method details and other Personal Data each time they check out (“Fastlane”).

When you create a Fastlane profile, PayPal will store your Personal Data, including your name, email, phone number, address information, billing information and payment method details, and other data that will be relevant to specific Partner or Merchant interactions, and pre-populate that information in the checkout flows or other interactive features of participating Partners and Merchants so that you can enjoy a faster Partner and Merchant experience by not having to manually input your payment or other information. We will also collect transaction and other Partner or Merchant data related to your purchases and other Partner and Merchant interactions when you use Fastlane. If you have a Fastlane profile, we may recognize you as a Fastlane user when you shop on the participating Partners and Merchants sites and we may prompt you to engage in participating Partner or Merchant interactions, such as register for a store or loyalty account using your Fastlane profile information. If you choose to interact with participating Partners or Merchants through Fastlane, you agree to let PayPal disclose your Fastlane profile information to the Participating Partners and Merchants and their service providers, and to facilitate your transaction and shopping experience on the participating Partners and Merchants sites.

When you shop on Partner and Merchant sites, the Partner and Merchant may disclose Personal Data with PayPal that we will use in accordance with this Privacy Statement and the relevant PayPal user agreement.

4. Why Do We Retain Personal Data?
We retain Personal Data to fulfill our legal or regulatory obligations and for our business purposes. We may retain Personal Data for longer periods than required by law if it is in our legitimate business interests and not prohibited by law. We retain biometric data for as long as needed or permitted given the purpose for which it was collected and no more than 3 years after your account closes, unless otherwise required by applicable law. If your account or profile is closed, we may take steps to mask Personal Data and other information, but we reserve our ability to retain and access the data for so long as required to comply with applicable laws. We will continue to use and disclose such Personal Data in accordance with this Privacy Statement. We retain biometric data for as long as needed or permitted given the purpose for which it was collected and no more than 3 years after your account closes, unless otherwise required by applicable law.

5. What Personal Data is used and for which Legal Basis
We may process your Personal Data for a variety of reasons that are permitted under applicable data protection laws and in accordance with the lawful bases below:

We collect the following Personal Data we consider necessary to fulfil our pre-contractual and contractual obligations to you and without which you will not be able to use the Services.

Necessary categories of Personal Data include:

Registration and Contact Information
Identification and Signature Information
Payment Information
Information related to legal requirements
Information you provide when you contact us
Transaction information
Package Tracking
Service-specific Personal Data
Information from credit reporting agencies and financial institutions
Information from your connected financial accounts
Information from your use of the Services
Technical usage data
Device information
Location data
These activities include:

to provide our Services, to fulfil relevant agreements with you and to otherwise administer our business relationship with you. If you are using Fastlane, we will also use your Personal Data and payment method details to determine whether the payment you are making with a participating Partner or Merchant is authorised by you and likely to be successfully authorised by the payment method you choose to use when you make a purchase using details from your Fastlane profile.
to administer your payment for products and the customer relationship.
to assess your creditworthiness in connection with your application, confirm your identity and your contact information, and protect you and others from fraud.
to confirm your identity, also through the use of electronic signature, and verify your personal and contact details.
to prove that transactions have been executed.
to establish, exercise or defend a legal claim or collection procedures.
to comply with internal procedures.
to assess which payment options and services to offer you, for example by carrying out internal and external credit assessments.
for customer analysis, to administer our Services, and for internal operations, for example troubleshooting, data analysis, testing, research and statistical purposes.
to communicate with you in relation to our Services.
to comply with applicable laws, such as anti-money laundering and booking keeping laws and rules issued by our designated banks and relevant card networks.
We have a legitimate interest in ensuring that PayPal remains a secure financial service and continuing to offer services that are innovative and of interest to you. We do this where our legitimate interests are not outweighed by your right not to have your data processed for this purpose.

These activities include:

to ensure that content is presented in the most effective way for you and your device.
to prevent misuse of our Services as part of our efforts to keep our platform safe and secure.
to determine your eligibility for and to communicate with you about Services for which you may qualify or that may be of interest to you, for example by carrying out internal credit assessments.
to carry out risk analysis, fraud prevention and risk management.
to improve our Services and for general business development purposes, for example improving risk models to minimize fraud, develop new products and features and explore new business opportunities.
To keep your account, profile and financial information accurate and up to date.
for marketing, product and customer analysis, including testing, for example to improve our product range and optimize our customer offerings.
to comply with applicable laws, such as anti-money laundering, bookkeeping laws, regulatory capital adequacy requirements, and rules issued by our designated banks and relevant card networks. For example, when we process Personal Data for know-your-customer (“KYC”) requirements, to prevent, detect and investigate money laundering, terrorist financing and fraud. We also carry out sanction screening, report to tax authorities, police enforcement authorities, enforcement authorities, supervisory authorities where we are not compelled by applicable law but where we have a good faith belief that sharing the information is necessary to comply with applicable law.
to facilitate your participation in competitions, offerings, and events.
to conduct financial risk management obligations such as credit performance and quality, insurance risks and compliance with capital adequacy requirements under applicable law
to process information about your contacts to make it easy for you to find and connect them and improve payment accuracy. By providing us with information about your contacts you certify that you have permission to provide that information to PayPal for the purposes described in this Privacy Statement.
to provide you with information, news, and marketing about our Services, including where we partner with others to offer similar services.
to associate information about you to identify your use of Services without a PayPal account (e.g. Pay Without a PayPal account), and to associate such transactions with your PayPal account, if you have one or later establish an account.
to remember your preferences for the next time you use the Services, such as which of your payment methods you prefer or whether you choose to receive digital receipts via email or text when you checkout.
We have a legal obligation under laws to conduct certain processing activities. We do this where it is necessary to comply with applicable laws.

These activities include:

to provide our Services and products.
to certify your identity, also for signature purposes, and verify your personal and contact details.
to establish, exercise or defend a legal claim or collection procedures.
to prevent misuse of our Services as part of our efforts to keep our platform safe and secure.
to carry out risk analysis, fraud prevention and risk management.
to comply with applicable laws, such as anti-money laundering and bookkeeping laws and regulatory capital adequacy requirements and rules issued by our designated banks and relevant card networks. For example, when we process Personal Data for know-your-customer (“KYC”) requirements, to prevent, detect and investigate money laundering, terrorist financing and fraud. We also carry out sanction screening, report to tax authorities, police enforcement authorities, enforcement authorities, supervisory authorities.
We rely on your explicit and voluntary consent to process your Personal Data to participate in certain features that while not necessary for use of the Services may be of interest to you, such as syncing your contact list to your account, providing biometric data, targeted advertising, linking your email account for package tracking or connecting to a third-party platform. You may change your mind about use of these features at any time through your account settings. Note that withdrawing your consent will not affect the lawfulness of any processing we have conducted prior to your withdrawal. Please refer to Section 10 (“What Are Your Rights”) for more information on your right to withdraw your consent.

6. Do We Share Personal Data?
We may share your Personal Data or other information about you with others in a variety of ways as described in this section of the Privacy Statement.

We may share your Personal Data or other information for the following reasons:

With other members of the PayPal corporate family: We may share your Personal Data with members of the PayPal family of entities to, among other things, provide the Services you have requested or authorized; to manage risk; to help detect and prevent potentially illegal and fraudulent acts and other violations of our policies and agreements; and to help us manage the availability and connectivity of PayPal products, Services, and communications.

With other companies that provide services to us: We may share Personal Data with third-party service providers that perform services and functions at our direction and on our behalf. These third-party service providers may, for example, provide you with Services, verify your identity, assist in processing transactions, send you advertisements for our products and Services, or provide customer support.

With other financial institutions: We may share Personal Data with other financial institutions that we have partnered with to jointly offer a product, such as with Synchrony Bank in connection with the PayPal Extras credit card. These financial institutions may only use this information to market and offer PayPal-related products, unless you have given consent for other uses. We may also share Personal Data to process transactions, provide you with benefits associated with your eligible cards, and keep your financial information up to date. For payment transactions with Fastlane, your Personal Data will be shared with the provider of the payment services for the participating Partner and Merchant to enable the processing of the payment transaction. The payment provider for the Partner and Merchant may be PayPal or a third party payment provider.

With the other parties to transactions when you use the Services, such as other Users, Partners and Merchants, and their service providers: We may share information about you and your account or profile with the other parties involved in processing your transactions. For example, we may do this when you use the Services to initiate online purchases, save your payment information with Fastlane, pay other Users, use the Services or return goods. The other parties with whom we may share such information include other Users you are sending or receiving funds from or to, Partners and Merchants, and their service providers when you use the Services to pay for goods or services. The information includes:

Personal Data and account or profile information necessary to facilitate the transaction;
information to help other participant(s) resolve disputes and detect and prevent fraud; and
aggregated data and performance analytics to help Partners and Merchants better understand Users and to help Partners and Merchants enhance Users’ experiences. 
With other third parties for our business purposes or as permitted or required by law: We may share information about you with other parties for PayPal’s business purposes or as permitted or required by law, including:

if we need to do so to comply with a law, legal process or regulations;
law enforcement, regulators, government officials, or other third parties (in Singapore or elsewhere) in relation to a subpoena, court order, or other legal process or requirement under Singapore law or regulation, or the laws and regulations of other jurisdictions that are applicable to PayPal or one of its affiliates; when we need to do so to comply with such law or credit card rules; or when we believe, in our sole discretion, that the disclosure of Personal Data is necessary or appropriate to prevent physical harm or financial loss; or to report suspected illegal activity or to investigate violations of a user agreement;
to protect the vital interests of a person;
to protect our property, Services and legal rights;
to facilitate a purchase or sale of all or part of PayPal’s business;
in connection with shipping and related services for purchases made using a Service;
to help assess and manage risk and prevent fraud against us, our Users and fraud involving our Sites or use of our Services, including fraud that occurs at or involves our business partners, strategic ventures, or other individuals and Partners and Merchants;
to banking partners as required by card association rules for inclusion on their list of terminated Partners and Merchants;
to credit reporting and collection agencies;
to companies that we plan to merge with or be acquired by; and
to support our audit, compliance, and corporate governance functions.
With your consent: We also will share your Personal Data and other information with your consent or direction, including if you authorize an account connection with a third-party account or platform.

In addition, PayPal may provide aggregated statistical data to third-parties, including other businesses and members of the public, about how, when, and why Users visit our Sites and use our Services. This data will not personally identify you or provide information about your use of the Sites or Services. We do not share your Personal Data with third parties for their marketing purposes without your consent.

7. How Do We Work with Other Services and Platforms?
A significant benefit and innovation of PayPal’s Services is that you can connect your account with a third-party account or platform. For the purposes of this Privacy Statement, an “account connection” with such a third-party is a connection you authorize or enable between your account and a non-PayPal account, payment instrument, or platform that you lawfully control or own. When you authorize such a connection, PayPal and the third-party will exchange your Personal Data and other information directly. Examples of account connections include:

linking your account to a social media account or social messaging service;
connecting your account to a third-party data aggregation or financial services company, if you provide such company with your account log-in credentials; or
using your account to make payments to Partners and Merchants or allowing Partners and Merchants to charge your account.
If you choose to create an account connection, we may receive information from the third-party about you and your use of the third-party’s service. For example, if you connect your account to a social media account, we will receive Personal Data from the social media provider via the account connection. If you connect your account to other financial accounts, directly or through a third-party service provider, we may have access to your account balance and transactional information, such as purchases and funds transfers. We will use all such information that we receive from a third-party via an account connection in a manner consistent with this Privacy Statement.

Information that we share with a third-party based on an account connection will be used and disclosed in accordance with the third-party’s privacy practices. Before authorizing an account connection, you should review the privacy notice of any third-party that will gain access to your Personal Data as part of the account connection. For example, Personal Data that PayPal shares with a third-party account or platform such as a social media account may in turn be shared with certain other parties, including the general public, depending on the account’s or platform’s privacy practices.

8. How Do We Use Cookies and Tracking Technologies?
When you visit our Sites, use our Services, or visit a third-party website for which we provide online Services, we and our business partners and vendors may use cookies and other tracking technologies (collectively, “Cookies”) to recognize you as a User and to customize your online experiences, the Services you use, and other online content and advertising; measure the effectiveness of promotions and perform analytics; and to mitigate risk, prevent potential fraud, and promote trust and safety across our Sites and Services. Certain aspects and features of our Services and Sites are only available through the use of Cookies, so if you choose to disable or decline Cookies, your use of the Sites and Services may be limited or not possible.

Do Not Track (DNT) is an optional browser setting that allows you to express your preferences regarding tracking by advertisers and other third-parties. We do not respond to DNT signals.

Please review our Statement on Cookies and Tracking Technologies to learn more about how we use Cookies.

9. What Privacy Choices Are Available To You?
You have choices when it comes to the privacy practices and communications described in this Privacy Statement. Many of your choices may be explained at the time you sign up for or use a Service or in the context of your use of a Site. You may be provided with instructions and prompts within the experiences as you navigate the Services.

Choices Relating to the Personal Data We Collect
Personal Data. You may decline to provide Personal Data when it is requested by PayPal, but certain Services or all of the Services may be unavailable to you.
Location and other device-level information. The device you use to access the Sites or Services may collect information about you, including Geolocation Information and User usage data that PayPal may then collect and use. For information about your ability to restrict the collection and use of such information, please use the settings available in the device.
Choices Relating to Our Use of Your Personal Data
Personalized Services offered by PayPal on third-party websites and services. You may manage your preferences for other PayPal Services that are personalized and offered to you on third-party websites from your account. We may also provide you with instructions and prompts on how to manage your preferences within the Service experience.
Finding and connecting with others. If available, you may manage your preferences for finding and connecting with others from your account of the Service you use.
Choices Relating to Account Connections
If you authorize an account connection to a third-party account or platform, such as a social media account, you may be able to manage your connection preferences from your account or the third-party account or platform. Please refer to the privacy notice that governs the third-party platform for more information on the choices you may have.
Choices Relating to Cookies
You may have options available to manage your cookies preferences. For example, your browser or internet device may allow you delete, disable, or block certain cookies and other tracking technologies. You can learn more by visiting AboutCookies.org. You may choose to enable these options, but doing so may prevent you from using many of the core features and functions available on a Service or Site.
You may have an option regarding the use of cookies and other tracking technologies when you use a Service or visit parts of a Site. For example, you may be asked if you want the Service or Site to “remember” certain things about you, and we will use cookies and other tracking technologies to the extent that you permit them.
You can learn more about our cookies and tracking technologies by visiting the Statement on Cookies and Tracking Technologies page.
Choices Relating to Your Registration and Account and Profile Information
If you have an account or profile, you generally may review and edit Personal Data by logging in and updating the information directly or by contacting us. Contact us if you do not have an account or profile or if you have questions about your account or profile information or other Personal Data.
Choices Relating to Communication
Notices, Alerts and Updates from Us:  
Marketing: We may send you marketing content about our Sites, Services, products, products we jointly offer with financial institutions, as well as the products and services of unaffiliated third parties and members of the PayPal corporate family through various communication channels, for example, email, text, pop-ups, push notifications, and messaging applications. You may opt out of these marketing communications by following the instructions in the communications you receive. If you have an account or profile with us, you may also adjust your communication preferences in your account or profile settings. For messages sent via push notifications, you may manage your preferences in your device.
Informational and Other: We will send communications to you that are required or necessary to send to Users of our Services, notifications that contain important information and other communications that you request from us. You may not opt out of receiving these communications. However, you may be able to adjust the media and format through which you receive these notices.
10. What are your Rights?
Subject to limitation set out in Data Protection Laws, you have certain rights in relation to your personal data. You have the right to request access to your data, rectification and data portability. Please contact us if you want to exercise these rights.

You may have the right to review automated decision making. You may also revoke consent. Revocation of your consent may affect our ability to provide services to you. If you want to exercise any of your rights, contact us. If you wish to complete a request for access to all personal data PayPal holds about you, remember that you may be required to prove your identity.

If you have an account or profile with any of our Services, you will generally be able to review and edit Personal Data in the account or profile by accessing the account and updating the information directly. You can also contact us if you do not have an account or profile or if you have questions about account or profile information or other Personal Data.

11. How Do We Protect Your Personal Data?
We maintain technical, physical, and administrative security measures designed to provide reasonable protection for your Personal Data against loss, misuse, unauthorized access, disclosure, and alteration. The security measures include firewalls, data encryption, physical access controls to our data centers, and information access authorization controls. While we are dedicated to securing our systems and Services, you are responsible for securing and maintaining the privacy of your password(s) and account/profile registration information and verifying that the Personal Data we maintain about you is accurate and current. We are not responsible for protecting any Personal Data that we share with a third-party based on an account connection that you have authorized.

12. Can Children Use Our Services?
The Sites and Services are not directed to children under the age of 13. We do not knowingly collect information, including Personal Data, from children or other individuals who are not legally able to use our Sites and Services. If we obtain actual knowledge that we have collected Personal Data from a child under the age of 13, we will promptly delete it, unless we are legally obligated to retain such data. Contact us if you believe that we have mistakenly or unintentionally collected information from a child under the age of 13.

13. What Else Should You Know?
Changes to This Privacy Statement. 

We may revise this Privacy Statement from time to time to reflect changes to our business, the Sites or Services, or applicable laws. The revised Privacy Statement will be effective as of the published effective date. If you are a new User or are receiving this Privacy Statement for the first time and there is an upcoming change described on the Policy Updates or Privacy Statement page at the time you receive this Privacy Statement, such upcoming change will apply to you on the indicated effective date.

If the revised version includes a substantial change, we will provide you with 30 days prior notice by posting notice of the change on the “Policy Update” page of our website. We also may notify Users of the change using email or other means. 

Transfers of Your Personal Data to Other Countries

Our operations are supported by a network of computers, cloud-based servers, and other infrastructure and information technology, including, but not limited to, third-party service providers. We and our third-party service providers store and Process your Personal Data in the United States of America and elsewhere in the world. We will protect your information as described in this Privacy Statement if your Personal Data is transferred to other countries. By using our Sites and Services, you consent to your Personal Data being transferred to other countries, including countries that have different data protection rules than your country. We do not represent that our Sites and Services are appropriate or available in any particular jurisdiction. 

14. Contact Us
You may contact us if you have general questions about our Privacy Statement and practices or questions about your account or profile information or Personal Data.

We want to make sure your questions go to the right place:

Click here to contact us about your PayPal account or transaction, or a card payment made to a Partner and Merchant or Unbranded Payment Services.

Click here to contact us about your Xoom account.
To contact us about your Fastlane profile: visit your Fastlane profile management portal.
Our Data Protection Officer can be contacted Online or by post at 5 Temasek Boulevard 09-01, Suntec Tower 5, Singapore 038985.

If you are resident in the EEA you may contact PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal L-2449, Luxembourg’s Data Protection Officer which acts as a representative of PayPal by post or Online. Please mark your letter “to the Data Protection Officer”.

15. Definitions
Account means a PayPal or Xoom member account.

Device Information means data that can be automatically collected from any device used to access the Sites or Services. Such information may include, but is not limited to, your device type; your device’s network connections; your device’s name; your device’s IP address; information about your device’s web browser and the internet connection being used to access the Site or Services; Geolocation Information; information about apps downloaded to your device; and biometric data (e.g., Touch ID/Fingerprint to verify your identity).

Other Services means companies or separate brands, affiliates or subsidiaries of PayPal, Inc., and who process Personal Data in accordance with their terms of service and privacy policies. Examples include Honey Science LLC, Paidy Inc., and Hyperwallet.

Geolocation Information means information that identifies with reasonable specificity your location by using, for instance, longitude and latitude coordinates obtained through GPS, Wi-Fi, or cell site triangulation. Some of our Services may ask you for permission to share your current location. Some of the Sites and Services require this information to provide a specific product or online Service. If you do not agree to our collection of the geolocation information, our Sites or Services may not function properly when you try to use them.

Pay without a PayPal account means our Services may be accessed by individuals without using a PayPal account, a Fastlane profile, or the Unbranded Payment Services.

Partner and Merchant means the merchant or business that our Users transact with for the purpose of obtaining goods or services.

PayPal means PayPal Pte. Ltd, a Singapore private limited company whose address is 5 Temasek Boulevard #09-01, Suntec Tower Five, Singapore 038985, which offers PayPal, Xoom, Unbranded Payment Services and Fastlane profile services.

Personal Data means personal information that can be associated with an identified or identifiable person. “Personal Data” can include name, postal address (including billing and shipping addresses), telephone number, email address, payment card number, other financial account information, account number, date of birth, and government-issued credentials (e.g., driver’s license number, national ID, passport, Social Security number and Taxpayer ID). Personal Data does not include information that does not identify a specific User.

Process means any method or way that we handle Personal Data or sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, and consultation, disclosure by transmission, disseminating or otherwise making available, alignment or combination, restriction, erasure or destruction of Personal Data.

Services means any PayPal Services, branded or Unbranded Payment Services, Pay without a PayPal account, PayPal Groups, Fastlane, Xoom, credit products and services, content, features, technologies, or functions, and all related websites, applications and services offered to you by PayPal, with the exception of Other Services. Your use of the Services includes use of our Sites.

Sites means the websites, mobile apps, official social media platforms, or other online properties through which PayPal offers the Services and which has posted or linked to this Privacy Statement.

Technical Usage Data means information we collect from your phone, computer or other device that you use to access the Sites or Services. Technical Usage Data tells us how you use the Sites and Services, such as what you have searched for and viewed on the Sites and the way you use our Services, including your IP address, statistics regarding how pages are loaded or viewed, the websites you visited before coming to the Sites and other usage and browsing information collected through Cookies.

Unbranded Payment Services means you are interacting with and making payments to Partners and Merchants using our card payment services that do not carry the PayPal brand, or when you use our Braintree services.

User means an individual who uses the Services or accesses the Sites.

16. Additional Information
The information provided in this section may be specific to customers depending on your region or is provided to PayPal from third parties whom you may interact with when using the Services. You can contact us if you have any questions about the details in this section.

Google ReCaptcha

PayPal uses ReCaptcha on the Sites and Services. Your use of ReCaptcha is subject to the Google Privacy Policy and Terms of Use.

ReCaptcha is only used to fight spam and abuse.
        `
    },
];
