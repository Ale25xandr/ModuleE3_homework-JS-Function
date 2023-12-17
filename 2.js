function isPrime(a)
{
    if (a>1000 || a == 0 || a == 1)
    {
        return 'Введено слишком большое значение'
    }
    else
    {
        if (a%2 == 0)
        {
            return 'False'
        }
        else
        {
            for(let i; 2<i<a; i++)
            {
                if (a%i == 0)
                {
                    return 'False'
                }
                else
                {
                    return 'True'
                }
            }
        }
    }
}

console.log(isPrime(134))