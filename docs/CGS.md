

















# Collateral Grading System

---

## Types of Stablecoin:

1. **Fiat-backed stablecoin** : USDC, BUSD, HUSD, USDP, TUSD, GUSD USDT*
2. **Crypto-backed stablecoin** : DAI, LUSD, FEI, MIM, ALUSD
3. **Algorithmic stablecoin** : UST, FRAX

**Liquid Salon also accepts interest-bearing tokens, Curve LPs, and UNI V3 LPs of stablecoins**
**The Collateral Risk Grading System for the types of stablecoins above:**

### Part 1

Collateral Grading System for fiat-backed stablecoin: These types of stablecoins are backed by USD dollars in the Trust. Therefore, they can be considered as the highest level of collateral. The maximum collateral factor for these stablecoins is 1, except USDT*.

| Fiat-backed stablecoins | Collateral factor |
| ----------------------- | ----------------- |
| USDC                    | 1                 |
| BUSD                    | 1                 |
| HUSD                    | 1                 |
| USDP                    | 1                 |
| TUSD                    | 1                 |
| GUSD                    | 1                 |
| USDT*                   | 0.95              |

*The latest audit report of Tether indicates that 43.68% of the reserves are commercial paper https://assets.ctfassets.net/vyse88cgwfbl/4hiNJsZ98LlZqCJHKzrLpV/2b6338482ef0093382885f80ba6f1083/Tether_Assurance-12-31-21.pdf 



### Part 2

The collateral grading system for crypto-backed and algorithmic stablecoins (X+3Crv) are incorporated three factors:

1. TVL locked in the Curve pool:

   | TVL                     | Rating |
   | :---------------------- | :----: |
   | Above $2b               |   1    |
   | Between $2b and $1b     |   2    |
   | Between $1b and $0.5b   |   3    |
   | Between $0.5b and $0.1b |   4    |
   | Below $0.1b             |   5    |

   

2. Slippage on a $50m buy order on Curve:

   | Slippage on $10m pump | Rating |
   | --------------------- | :----: |
   | 0% to 0.2%            |   1    |
   | 0.2% to 0.4%          |   2    |
   | 0.4% to 0.6%          |   3    |
   | 0.6% to 1%            |   4    |
   | Above 1%              |   5    |

   

3. Slippage on a $50m sell order on Curve：

   | Slippage on $10m dump | Rating |
   | --------------------- | :----: |
   | 0% to 0.2%            |   1    |
   | 0.2% to 0.4%          |   2    |
   | 0.4% to 0.6%          |   3    |
   | 0.6% to 1%            |   4    |
   | Above 1%              |   5    |

   The sum of these ratings:

   |  Sum  | Total Rating | Collateral Factor |
   | :---: | :----------: | :---------------: |
   |  1-3  |      A       |     0.85-0.9      |
   |  4-6  |      B       |     0.8-0.85      |
   |  7-9  |      C       |      0.7-0.8      |
   | 10-12 |      D       |      0.6-0.7      |
   | 13-15 |      E       |       <0.6        |

   

### Part 3

The grading system for interest-bearing tokens on Yearn, Aave and Compound:These tokens are yDAI, yUSDC, yUSDT, yTUSD, aDAI, aUSDC, aUSDT, cDAI and cUSDC.The main risk of these assets is price oracle attack. Most of these stablecoins are fiat-backed, and only DAI is crypto-backed stablecoin. They are still considered as collateral with high confidence. Their collateral factor will be based on Part 1 and Part 2, with additional risk considered.

| Stablecoins | Collateral Factor |
| :---------: | :---------------: |
|    yDAI     |        0.8        |
|    yUSDC    |        0.9        |
|    yUSDT    |       0.85        |
|    yTUSD    |        0.9        |
|    aDAI     |        0.8        |
|    aUSDC    |        0.9        |
|    aUSDT    |       0.85        |
|    cDAI     |        0.8        |
|    cUSDC    |        0.9        |

### Part 4

The grading system for Curve LPs and UNI V3 LPs:3Crv LP is considered as the highest level of LP collateral among LP collaterals. It is used as the benchmark for other LPs. The collateral factor of 3Crv LP is 0.85, equal to the maximum collateral factor of DAI.Considering the heath of the pool, for instance, DAI/MIM on Uniswap, if MIM in the pool accounts for more than 70%, the liquidity pool will be considered out of balance. In other words, the LP will become quite risky. To encounter these risks, when the stablecoin (excluding fiat-backed and DAI) in the pool accounts for more than 70%, the protocol will stop accepting these stablecoins and related LPs as collateral. The collateral factor of each LPs can be calculated based on the result from Part 2 and the benchmark factor of 3crv.

| LP tokens       | Collateral factor |
| --------------- | ----------------- |
| 3crv            | 0.85              |
| MIM/3crv        | 0.68              |
| UST/3crv        | 0.73              |
| DAI/USDC UNI V3 | 0.85              |



#### USDC Deposit Interest Rate

Liquid Salon DAO's USDC interest rate strategy is used to manage liquidity risk and optimise utilisation. The deposit interest rate comes from the Reserve Rate R. Note: Reserve rate equation: 
$$
Reserve\;Rate=\frac{fiat\;backed\;stablecoins}{total\;supply\;of\;lsUSD}
$$
R is an indicator of the availability of USDC in the pool for users to swap alUSD into USDC. The interest rate model is used to manage liquidity risk through user incentivises to support liquidity:

- When reserve is enough: low interest rate to encourage lsUSD loans
- When reserve is scarce: high interest rate to encourage repayments of loans or additional deposits of USDC

### Interest Rate Model

Liquidity risk materialises when reserve is low, it becomes more problematic as R gets closer to 0%. To tailor the model to this constarint, the interest rate curve is split in two parts around an optimal reserve are R<sub>optimal</sub>. For liquid slaon dao, R<sub>optimal</sub> = 100%. After R<sub>optimal</sub> the slope is small, before it changes sharply.  

$$
if\;R> R_{optimal}:\;I_t= I_0 + \frac{R_{optimal}}{R_t-R_{optimal}}R_{slope1}
$$

$$
if\;R \leq R_{optimal}:\;I_t= I_0 + R_{slpoe1}+\frac{R_{optimal}}{R_t}R_{slope2}
$$


In the borrow rate of loans on liquid salon dao, it is also affected by Reserve Rate. 

- When R > R<sub>optimal</sub> the borrow interest rates decreases slowly as Reserve Rate increases
- When R < R<sub>optimal</sub> the borrow interest rates increase sharply as Reserve Rate decreases

Variable loans see their borrow rate constantly evolving with Reserve Rate decreasing. 

Interest Rate Parameter for USDC

| Asset | R<sub>optimal</sub> | Base | Slope1 | Slope2 |
| ----- | ------------------- | ---- | ------ | ------ |
| USDC  | 100%                | 0    | 2%     | 80%    |



