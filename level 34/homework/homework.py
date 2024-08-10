def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))

#Print-ის გამოყენებით ტერმინალში გამოგვიტანს 3-ს რადგან ყველაზე მოკლე სიტყვა წინადადებაში არის "The" რომელიც შედგება 3 სიმბოლოსგან.