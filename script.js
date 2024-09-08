// Array de membros, cada um com nome, biografia, imagem e link da Wikipedia
const members = [
    {
        name: 'Linkin Park',
        bio: '       Linkin Park é uma banda de rock dos Estados Unidos formada em Agoura Hills, Califórnia.[9] A formação atual da banda inclui o vocalista e multi-instrumentista Mike Shinoda, o guitarrista Brad Delson, o baixista Dave Farrell, o DJ Joe Hahn, a vocalista Emily Armstrong e o baterista Colin Brittain. A formação do grupo em seus sete primeiros álbuns de estúdio incluía o vocalista Chester Bennington e o baterista Rob Bourdon; após o suicídio de Bennington em julho de 2017, a banda entrou em um hiato por tempo indeterminado. Em setembro de 2024, Linkin Park retornou as atividades com as adições de Armstrong e Brittain.[10] O vocalista Mark Wakefield e o baixista Kyle Christner são ex-membros da banda.',
        image: 'Linkin.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Linkin_Park'
    },
    {
        name: 'Chester Bennington',
        bio: 'Chester Charles Bennington (Phoenix, 20 de março de 1976 – Palos Verdes Estates, 20 de julho de 2017) foi um cantor, compositor, ator e vocalista da banda americana Linkin Park. Ele também trabalhou no grupo Dead by Sunrise e foi vocalista do Stone Temple Pilots entre 2013 e 2015.',
        image: 'chester.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Chester_Bennington'
    },
    {
        name: 'Mike Shinoda',
        bio: 'Michael Kenji "Mike" Shinoda (Los Angeles, 11 de fevereiro de 1977)[2][3] é um músico, produtor musical e artista norte-americano. Conhecido como vocalista, rapper, compositor e multi-instrumentista da banda estadunidense Linkin Park. Também tem um projeto paralelo chamado Fort Minor, mais voltado para o Hip Hop. Ele atuou como produtor de faixas e álbuns de Lupe Fiasco, Styles of Beyond e The X-Ecutioners.',
        image: 'mike.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Mike_Shinoda'
    },
    {
        name: 'Rob Bourdon',
        bio: 'Robert Gregory Bourdon (Calabasas, 20 de janeiro de 1979), mais conhecido como Rob Bourdon, é um músico americano, mais conhecido como ex-baterista e co-fundador da banda de rock Linkin Park.',
        image: 'Rob.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Rob_Bourdon'
    },
    {
        name: 'Joe Hahn',
        bio: 'Joseph "Joe" Hahn[1] (Dallas, Texas, 15 de março de 1977) é o DJ da banda estadunidense Linkin Park.',
        image: 'Joe.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Joe_Hahn'
    },
    {
        name: 'Brad Delson',
        bio: 'Bradford Phillip Kaplan Delson (Agoura Hills, 1 de dezembro de 1977) é um músico, compositor e produtor musical americano, mais conhecido como um dos fundadores e guitarrista do grupo de rock estadunidense Linkin Park. Ele é mais conhecido como Brad Delson.',
        image: 'Brad.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Brad_Delson'
    },
    {
        name: 'Mark Wakefield',
        bio: 'Mark Wakefield é um cantor, compositor e empresário americano nascido em 31 de maio de 1974. Ele é conhecido por ser o empresário da banda Taproot e por ser o ex-vocalista do Xero , a banda que mais tarde se tornaria o Linkin Park .',
        image: 'Mark.jpg',
        wikiLink: 'https://linkinpark.fandom.com/wiki/Mark_Wakefield'
    },
    {
        name: 'Emily Armstrong',
        bio: 'Emily Marcia Armstrong (Los Angeles, 6 de maio de 1986) é uma cantora, compositora e musicista estadunidense. Descrita como "a Janis Joplin da era do arena rock", é co-fundadora da banda Dead Sara e atual vocalista principal da banda Linkin Park.',
        image: 'Emily.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Emily_Armstrong'
    },
    {
        name: 'Dave Farrell',
        bio: 'David Michael Farrell , também conhecido pelo seu nome artístico Phoenix (nascido em 8 de fevereiro de 1977), é um músico americano, mais conhecido como o baixista da banda de rock Linkin Park . Ele também foi membro do Tasty Snax, uma banda de ska punk .',
        image: 'Dave.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/Dave_Farrell'
    },
    {
        name: 'Colin Brittain',
        bio: 'Colin Brittain (Nashville, Tennessee, 29 de dezembro de 1986 como Colin Cunningham), é um compositor, produtor e músico americano contratado pela Warner Chappell Music.[1] Ele ganhou destaque na indústria musical por seu trabalho com várias bandas de rock e pop-punk. Colin é conhecido por sua habilidade em criar músicas cativantes e produzir álbuns de alta qualidade.',
        image: 'Colin.jpg',
        wikiLink: 'https://pt.wikipedia.org/wiki/Colin_Brittain'
    },
    {
        name: 'Scott Koziol',
        bio: 'Scott Koziol foi um baixista temporário do Linkin Park . Ele tocou baixo na música " One Step Closer " do álbum Hybrid Theory (o baixo em outras três faixas foi tocado por Ian Hornbeck, todos os outros baixos foram tocados pelo guitarrista do Linkin Park, Brad Delson ). Scott também pode ser visto no vídeo da MTV para "One Step Closer", e fez várias turnês pelos EUA com a banda, incluindo paradas no The Roxy, The Whiskey, Avalon, Roseland (NY), Radio Shows e outros. Ele saiu quando Dave "Phoenix" Farrell voltou ao Linkin Park no final de 2000. Ele também tocou com Kottonmouth Kings e outros artistas.',
        image: 'Scott.jpg',
        wikiLink: 'https://linkinpark.fandom.com/wiki/Scott_Koziol'
    },
    {
        name: 'Kyle Christner',
        bio: 'Kyle Christner (atualmente na banda Nosedive) foi o baixista do EP Hybrid Theory do Linkin Park (lançado em 1999), durante o tempo em que Phoenix estava fora da banda devido a compromissos com o The Snax. Ele foi substituído por Scott Koziol e Ian Hornbeck no álbum de estreia do Linkin Park, Hybrid Theory.',
        image: 'Kyle.jpg',
        wikiLink: 'https://linkinpark.fandom.com/wiki/Kyle_Christener'
    },
    // Outros membros...
];

// Função que é chamada quando o botão de pesquisa é clicado
function search() {
    // Obtém o valor digitado no campo de pesquisa e o converte para minúsculas
    const searchInput = document.getElementById('searchInput').value.toLowerCase() || 'linkin park'; // Se estiver vazio, busca 'Linkin Park'
    
    // Obtém os elementos de imagem de fundo, nome, biografia e link pelo ID
    const backgroundImage = document.getElementById('backgroundImage');
    const memberName = document.getElementById('memberName');
    const memberBio = document.getElementById('memberBio');
    const memberLink = document.getElementById('memberLink'); // Link

    // Variável para controlar se um membro foi encontrado ou não
    let memberFound = false;

    // Percorre o array de membros
    members.forEach(member => {
        // Verifica se o nome do membro inclui o texto digitado na pesquisa
        if (member.name.toLowerCase().includes(searchInput)) {
            // Se encontrado, muda a imagem de fundo para a imagem do membro
            backgroundImage.style.backgroundImage = `url(${member.image})`;

            // Atualiza o nome do membro
            memberName.textContent = member.name;

            // Atualiza a biografia do membro
            memberBio.textContent = member.bio;

            // Atualiza o link e exibe o botão "Saiba mais"
            memberLink.href = member.wikiLink;
            memberLink.style.display = 'block'; // Exibe o link

            // Define que o membro foi encontrado
            memberFound = true;
        }
    });

    // Se nenhum membro foi encontrado
    if (!memberFound) {
        // Limpa a imagem de fundo
        backgroundImage.style.backgroundImage = '';

        // Exibe uma mensagem indicando que o membro não foi encontrado
        memberName.textContent = 'Membro não encontrado';

        // Limpa o texto da biografia
        memberBio.textContent = '';

        // Esconde o link
        memberLink.style.display = 'none';
    }
}
