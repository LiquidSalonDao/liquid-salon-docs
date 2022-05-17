# Protocol Control Debt

---



## Introduction

The Protocol Control Debt (PCD) mechanism is deployed via a contract to aggregate segmented liquidity from connected blockchains. Collateral can only be stablecoins related assets, the Protocol Control Debt mechanism takes control of lsUSD debts and collaterals : users can sell lsUSD via PCD with some fees in the event of periods below the peg.

Liquid Salon is similar to other stablecoin issuance protocols regarding users' experience, except users can sell lsUSD via PCD when the price of lsUSD is under $1 (Imagining PCD is similar to the pool on Curve for other stablecoin issurance protocol). **PCD will only exchange fiat-backed stablecoins for lsUSD in this scenario.** 

#### Collatrals

All collatreals accepted by PCD are stablecoins related asstes. It includes stablecoins, interest bearing tokens, and liquidity provider tokens. The collateral grading system is used to estimate the risk level of different stablecoin related assest, which will be disscussed later.

| Stablecoins                        | Interest bearing tokens | Liquidity provider tokens     |
| ---------------------------------- | ----------------------- | ----------------------------- |
| USDC, BUSD, HUSD, USDP, TUSD, USDT | yDAI,  yUSDC, yUSDT     | 3CRV                          |
| DAI, FEI, MIM, ALUSD               | aDAI,  aUSDC, aUSDT     | MIM/3CRV, UST/3CRV            |
| UST, FRAX                          | cUSDC, cDAI             | DAI/USDC(Uniswap V3 LP token) |

New collateral will be voted by DAO governance.

#### Borrow

Users can lend stablecoins and borrow lsUSD via PCD. For example, Users can lend USDC and borrow lsUSD at a 1:1 ratio. PCD provides isolated lending markets, that allow users to adjust their risk tolerance according to the collateral they decide to use. **There is no interest rate and borrow fee related to lsUSD borrowing.** 

#### Repayment

Users are able to claim the collateral back after repaying the loan. They can partially withdraw their collaterals as long as the overall helth factor is no less than 1. Also, they can claim all their collateral after repaying the debt.

#### Price Reblancing

When lsUSD < $1, 

- Debt holders are motived to purchase lsUSD and pay the debt with less dollars
- Non-debt holders will buy lsUSD and sell it to PCD with some fees

When lsUSD > $1,

- Debt holders are motived to sell lsUSD in the market
- Non-debt holders will open a position and sell lsUSD in the market



## Liquidation

When liquidation happens, the collateral may be partially sold to meet the minimun requirement of liquidation threshold. It is due to all the collaterals accepted on PCD are stablcoin related assets, the price of these collaterals is quite stable. Under some circumstances, like oracle attack, the price of these assests maybe fluctuate. In order to protect users' interest, PCD only liquidate part of users' position.

#### Collateral Factor

The collateral factor defines the maximum amount that can be borrowed with a specific collateral. It is expressed in decimal: at CF = 1, for every 1 USDC worth of collateral, borrowers will be able to borrow 1 lsUSD. Once a borrow is taken, the collateral factor changes with market conditions.

**For each wallet the maximum CF is calculated as the weighted average of the CFs of the collateral assets and their value:**
$$
MaxCF = \frac{\sum_\ Collateral_i\;in\;USD*CF_i}{Total\;Collateral\;In\;USD}
$$



#### Liquidation Threshold

The liquidation threshold is the percentage at which a position is defined as undercollateralised. For instance, a Liquidation threshold of 90% means if the value of loan rises above 90% of the collateral, the position is undercollateralised and could be liquidated.

**For each wallet the Liquidation Threshold is calculated as the weighted average of the Liquidation Thresholds of the collateral assets and their value:**
$$
Liquidation\;Threshold = \frac{\sum_\ Collateral_i\;in\;USD*Liquidation\;Threshold_i}{Total\;Collateral\;In\;USD}
$$



#### Liquidation Bonus

Bonus on the price of assets of collateral when liquidators purchase it as part of liquidation of a loan that has passed the liquidation threshold.

#### Health Factor

For each wallet, these risks parameters enbale the calculation of the health factor:
$$
Health\;Factor = \frac{\sum_\ Collateral_i\;in\;USD*Liquidation\;Threshold_i}{Total\;Borrows\;In\;USD}
$$
When HF < 1,  the position will be liquidated to maintain solvency for each wallet.



## Oracle Risk

In order to encounter oracle attack under some circumstances, PCD will collect price feeds from on-chain and off-chain sources

Our on-chain oracle will include Chainlink, Curve, and Uniswap V3 by using time weighted average price. Time intervel will be decided by DAO governance. In addition, price moving range of collateral is limited from -3% to +3% during a defined period. If the price of a specific collateral moves out of range, PCD will no longer accept these assets as collateral which means no more borrowing can be made by lending these assets.

## Yield Vault

PCD protocol supports extra yield earning for collaterals under the condition if the yield strategy: 

- Can only ever grow in token amount;
- Can be deposited and withdrawn at will.

#### Resrve factor

The reserve factor allocates a share of the protocol's collaterals as reserve for saftey purpose. The current reserve factor is set to 0.2. When reserve factor < 0.2, the protocol will withdraw collaterals from yield vaults to let reserve factor back above 0.2.

















