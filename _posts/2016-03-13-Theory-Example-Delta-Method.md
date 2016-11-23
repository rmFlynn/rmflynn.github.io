---
title: Death Density Function & The Delta Method
updated: 2016-03-13 15:56
---

When the varianc of a distrobution is not easly durived or not atall availible the delta method can be an efective whay to estimate it. One example that you will run into in time to event analisis is the variance acoiated with the deat dencity function, the form of it that you see in actuarial tables AKA:  

$$\hat f(t_{mj})=\frac{ \hat S(t_{j-1}) \hat q(j) }{t_j-t_{j-1}}$$

Note that $$\hat f(t_{mj})$$ is the product of the functions
$$\hat S(t_{j-1})$$ and $$\hat q(j)$$, multiplied by the constant
$$\frac{ 1 }{t_j-t_{j-1}}$$.


We now want to apply the delta method, but the process will be easier if
take the ln of the function first

$$\ln[\hat f(t_{mi})] = \ln[\frac{\hat S(t_{j-1}) \hat q(j)}{t_j-t_{j-1}}]$$.



The delta method provides the approximation

$$\hat{Var}[f(x)]=f'(\mu)\sigma^2$$.

Thus order to apply the delta method we need to derive and combine the
---
title: Death Density Function & The Delta Method
updated: 2016-03-13 15:56
---


When the variance of a distribution is not easily derived or not at all available the delta method can be an effective way to estimate it. One example that you will run into in time to event analysis is the variance associated with the death density function, the form of it that you see in actuarial tables AKA:  


$$\hat f(t_{mj})=\frac{ \hat S(t_{j-1}) \hat q(j) }{t_j-t_{j-1}}$$


Note that $$\hat f(t_{mj})$$ is the product of the functions
$$\hat S(t_{j-1})$$ and $$\hat q(j)$$, multiplied by the constant
$$\frac{ 1 }{t_j-t_{j-1}}$$.




We now want to apply the delta method, but the process will be easier if
take the ln of the function first


$$\ln[\hat f(t_{mi})] = \ln[\frac{\hat S(t_{j-1}) \hat q(j)}{t_j-t_{j-1}}]$$.






The delta method provides the approximation


$$\hat{Var}[f(x)]=f'(\mu)\sigma^2$$.


Thus order to apply the delta method we need to derive and combine the
variance of $$ \ln[\hat S(t_{j-1})] $$, and the variance of


$$\ln[\hat q(j)]$$.


The variance of $$\hat q(j)$$ is $$\frac{\hat q(j)(1-\hat q(j))}{n_j}$$, we
know this because, in the delta method, $$\hat q(j)$$ is assumed to be the
mean of a Bernoulli random variable.


In order to find the variance of $$\ln [\hat q(j)]$$ we can use the
approximation $$Var[f(x)]=f'(\mu)\sigma^2$$ from the delta method.


Thus


$$\hat{Var}(\ln [\hat q(j)])=\frac{1}{\hat q(j)^2} \frac{\hat q(j)(1-\hat q(j))}{n_j}= \frac{(\hat p(j))}{n_j \hat q(j)}$$.


In order to find the variance of $$\ln[\hat S(t_{j-1})]$$ we will again
use the approximation $$\hat{Var}(f(x))=[f'(\mu)]^2\sigma^2$$.
B


Note that $$\ln[\hat S(t_{j-1})]=\sum\limits_{i=0}^{j-1}\ln[\hat p(i) ]$$.


Let’s start with $$\hat{Var}(\ln[\hat p(i) ])$$. We know the variance of
of $$\hat p(i)$$ because like $$\hat q(j)$$ it is assumed to be the mean of
a Bernoulli random variable.


Thus
$$\hat{Var}(\ln [\hat p(i)])=\frac{1}{\hat p(i)^2} \frac{\hat p(i)(1-\hat p(i))}{n_i} = \frac{q_i}{n_ip_i}$$.


Another key assumption of the delta method is that the individuals at
risk are conditionally uncorrelated across intervals.


With this assumption we see that the variance of
$$\sum\limits_{i=0}^{j-1}\ln[\hat p(i) ]$$ is
$$\sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}$$.


To finally find the variance of $$\hat f(t_{mj})$$ we can use a different
approximation, also from the delta method, which is
$$\hat{Var}(e^x)=(e^\mu)^2\sigma^2$$.


Without our delta method assumptions $$\sigma^2$$ would be a more complex
calculation. However, Recall that we assume the individuals at risk are
conditionally uncorrelated across intervals.


Because $$\prod\limits_{i=0}^{j-1} \hat{p}_i$$ does not include interval
$$j$$, and $$\hat p(j)$$ contains only the interval $$j$$, the two functions
are not correlated.


Thus the variance of $$\ln[\prod\limits_{i=0}^{j-1}\hat cp_i \hat q(j)]$$
is
$$\left( \sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}\right) + \frac{(\hat p(j))}{n_j \hat q(j)}$$,
which is also the variance of $$\ln[\hat f(t_{mi})]$$.


Using this approximation
$$\hat{Var}(e^{\ln[\hat f(t_{mi})]}) = \left[ e^{\ln[\hat f(t_{mi})]} \right]^2 \left[ \left( \sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}\right) + \frac{(\hat p(j))}{n_j \hat q(j)} \right]$$


Which simplifies to:
$$\hat{Var}(\hat f(t_{mi})) = \left[ \frac{ \hat S(t_{j-1}) \hat q(j) }{t_j-t_{j-1}} \right]^2 \left[ \left( \sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}\right) + \frac{(\hat p(j))}{n_j \hat q(j)} \right]$$


Thus we have derived the variance of the death density.


