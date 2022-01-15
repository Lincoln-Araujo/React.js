
export const pokemons = {
    bulbasaur: {
        image: require('./bulbasaur.png'),
        title: 'Seed Pokemon',
        type:  'grass/poison',
        height:'0.7 m',
        weight:'6.9 kg',
        fight: '2',
        facts: ['There is a seed on its back',
                `By soaking up the sun's rays, its seed grows progressively larger`, 
                'Bulbasaur can be seen napping in bright sunlight.']
    },
    charmander: {
        image: require('./charmander.png'),
        title: 'Lizard Pokemon',
        type:  'fire',
        height:'0.6 m',
        weight:'8.5 kg',
        fight: '2',
        facts: ['The flame that burns at the tip of its tail is an indication of its emotions', 
                'The flame wavers when Charmander is enjoying itself',  
                'If the Pokemon becomes enraged, the flame burns fiercely']
    },
    squirtle: {
        image: require('./squirtle.png'),
        title: 'Tiny Turtle Pokemon',
        type:  'water',
        height:'0.5 m',
        weight:'9.0 kg',
        fight: '2',
        facts: [`Squirtle's shell is not merely used for protection`, 
                `The shell's rounded shape and the grooves on its surface help minimize resistance in water`, 
                'Cause its great resistance to water this pokemon can swim at high speeds']
    },
    pikachu: {
        image: require('./pikachu.png'),
        title: 'Mouse Pokemon',
        type:  'electric',
        height:'0.4 m',
        weight:'6.0 kg',
        fight: '3',
        facts: ['Whenever Pikachu comes across something new, it blasts it with a jolt of electricity', 
                `If you come acrooss a blackened berry, it's evidence that this Pokemon mistook the intensity of its charge`, 
                'Pikachu just evolves if it uses a Thunder Stone.']
    }    
};