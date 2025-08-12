class NumerosUnicos
{
    static int[] GetItensUnicos(int[] list)
    {
        Dictionary<int, int> repeticoes = new Dictionary<int, int>();

        foreach (int num in list)
        {
            if (repeticoes.ContainsKey(num))
            {
                repeticoes[num]++;
            }
            else
            {
                repeticoes.Add(num, 1);
            }
        }

        var newList = new List<int>();

        foreach (int num in list)
        {
            if (repeticoes[num] == 1)
            {
                newList.Add(num);
            }
        }

        return newList.ToArray();
    }

    static void Main()
    {
        int[] array = { 1, 2, 2, 3, 4, 4, 5 };

        int[] list = GetItensUnicos(array);

        Console.WriteLine("[" + string.Join(", ", list) + "]");
    }
}