---
title: My Resume
updated: 2016-01-24 15:56
---


“\\( 2+2 \\)$” 


Let’s derive the variance of the death density function, as estimated
from the life table. In other words, the variance of:
$$\hat f(t_{mj})=\frac{ \hat S(t_{j-1}) \hat q(j) }{t_j-t_{j-1}}$$

Note that $\hat f(t_{mj})$ is the product of the functions
$\hat S(t_{j-1})$ and $\hat q(j)$, multiplied by the constant
$\frac{ 1 }{t_j-t_{j-1}}$.

We now want to apply the delta method, but the process will be easier if
take the ln of the function first
$$\ln[\hat f(t_{mi})] = \ln[\frac{\hat S(t_{j-1}) \hat q(j)}{t_j-t_{j-1}}]$$.

The delta method provides the approximation
$\hat{Var}[f(x)]=f'(\mu)\sigma^2$.

Thus order to apply the delta method we need to derive and combine the
variance of $ \ln[\hat S(t_{j-1})] $, and the variance of
$\ln[\hat q(j)]$.

The variance of $\hat q(j)$ is $\frac{\hat q(j)(1-\hat q(j))}{n_j}$, we
know this because, in the delta method, $\hat q(j)$ is assumed to be the
mean of a Bernoulli random variable.

In order to find the variance of $\ln [\hat q(j)]$ we can use the
approximation $Var[f(x)]=f'(\mu)\sigma^2$ from the delta method.

Thus
$\hat{Var}(\ln [\hat q(j)])=\frac{1}{\hat q(j)^2} \frac{\hat q(j)(1-\hat q(j))}{n_j}= \frac{(\hat p(j))}{n_j \hat q(j)}$.

In order to find the variance of $\ln[\hat S(t_{j-1})]$ we will again
use the approximation $\hat{Var}(f(x))=[f'(\mu)]^2\sigma^2$.

Note that $\ln[\hat S(t_{j-1})]=\sum\limits_{i=0}^{j-1}\ln[\hat p(i) ]$.

Let’s start with $\hat{Var}(\ln[\hat p(i) ])$. We know the variance of
of $\hat p(i)$ because like $\hat q(j)$ it is assumed to be the mean of
a Bernoulli random variable.

Thus
$\hat{Var}(\ln [\hat p(i)])=\frac{1}{\hat p(i)^2} \frac{\hat p(i)(1-\hat p(i))}{n_i} = \frac{q_i}{n_ip_i}$.

Another key assumption of the delta method is that the individuals at
risk are conditionally uncorrelated across intervals.

With this assumption we see that the variance of
$\sum\limits_{i=0}^{j-1}\ln[\hat p(i) ]$ is
$\sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}$.

To finally find the variance of $\hat f(t_{mj})$ we can use a different
approximation, also from the delta method, which is
$\hat{Var}(e^x)=(e^\mu)^2\sigma^2$.

Without our delta method assumptions $\sigma^2$ would be a more complex
calculation. However, Recall that we assume the individuals at risk are
conditionally uncorrelated across intervals.

Because $\prod\limits_{i=0}^{j-1} \hat{p}_i$ does not include interval
$j$, and $\hat p(j)$ contains only the interval $j$, the two functions
are not correlated.

Thus the variance of $\ln[\prod\limits_{i=0}^{j-1}\hat p_i \hat q(j)]$
is
$\left( \sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}\right) + \frac{(\hat p(j))}{n_j \hat q(j)}$,
which is also the variance of $\ln[\hat f(t_{mi})]$.

Using this approximation
$$\hat{Var}(e^{\ln[\hat f(t_{mi})]}) = \left[ e^{\ln[\hat f(t_{mi})]} \right]^2 \left[ \left( \sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}\right) + \frac{(\hat p(j))}{n_j \hat q(j)} \right]$$

Which simplifies to:
$$\hat{Var}(\hat f(t_{mi})) = \left[ \frac{ \hat S(t_{j-1}) \hat q(j) }{t_j-t_{j-1}} \right]^2 \left[ \left( \sum\limits_{i=0}^{j-1} \frac{q_i}{n_ip_i}\right) + \frac{(\hat p(j))}{n_j \hat q(j)} \right]$$

Thus we have derived the variance of the death density.

Now let’s derive the variance of the hazard function estimated from the
life table. In other words, the variance of:

$$\hat{h}(t_{mj})=\frac{d_j}{(t_j-t_{j-1})(n_j-d_j/2)})$$

We begin by rewriting the hazard function in terms of $\hat{q}(j)$:

$$\hat{h}(t_{mj})=\frac{(\frac{1}{n_i})d_j}{(\frac{1}{n_i})(t_j-t_{j-1})(n_j-d_j/2)})$$

$$\hat{h}(t_{mj})=\frac{(\hat{q}(j)}{(t_j-t_{j-1})(1-\hat{q}(j)/2)})$$

The delta method easily assume that $\hat q(j)$ is the mean of a
Bernoulli random variable, and so its variance is
$\frac{\hat q(j)(1-\hat q(j))}{n_j}$.

Therefore, if we use the delta method approximation
($\hat{Var}([f(x)])=f'(\mu)\sigma^2$), we find
$$\hat{Var}(\hat{h}(t_{mj}))=\left[ \frac{\hat{q}'(j)(t_j-t_{j-1})(1-\hat{q}(j)/2)-\hat{q}(j) (t_j-t_{j-1})(-\hat{q}'(j)/2)} {(t_j-t_{j-1})^2(1-\hat{q}(j)/2)^2} \right]^2 \left[ \frac{\hat q(j)(1-\hat q(j))}{n_j} \right]$$.

which simplifies thus:

$$\left[ \frac{\hat{q}'(j)(t_j-t_{j-1})(1-\hat{q}(j)/2)-\hat{q}(j) (t_j-t_{j-1})(-\hat{q}'(j)/2)} {(t_j-t_{j-1})^2(1-\hat{q}(j)/2)^2} \right]^2 \left[ \frac{\hat q(j)(1-\hat q(j))}{n_j} \right]=$$.

$$\left[ 
\frac
{\hat{q}'(j)(1-\hat{q}(j)/2)+\hat{q}(j)(\hat{q}'(j)/2)}
{(t_j-t_{j-1})(1-\hat{q}(j)/2)^2} 
\right]^2 
\left[ \frac{\hat q(j)(1-\hat q(j))}{n_j} \right]=$$

$$\left[ 
\frac
{\hat{q}'(j)-\hat{q}'(j)\hat{q}(j)/2+\hat{q}(j)\hat{q}'(j)/2}
{(t_j-t_{j-1})(1-\hat{q}(j)/2)^2} 
\right]^2 
\left[ \frac{\hat q(j)(1-\hat q(j))}{n_j} \right]=$$

$$\left[ 
\frac
{\hat{q}'(j)}
{(t_j-t_{j-1})(1-\hat{q}(j)/2)^2} 
\right]^2 
\left[ \frac{\hat q(j)(1-\hat q(j))}{n_j} \right]$$

Thus (Although it is not the most elegant result) we have derived the
variance of the hazard.


