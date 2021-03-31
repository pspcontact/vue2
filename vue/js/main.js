let app = new Vue({
    el: '#app',
    data: {
        seen2: false,
        seen: true,
        message: 'Введите первого игрока',
        message2: 'Введите второго игрока',
        secondName: '',
        name: '',
        zero: true,
        sign1: '', sign2: '', sign3: '', sign4: '', sign5: '', sign6: '', sign7: '', sign8: '', sign9: '',
        player: '',
    },
    methods: {
        hiden: function() {
            if(this.name === '') {
                alert('Введите ник');
            }
            else {
                this.player = this.name;
                this.seen = !this.seen;
                this.seen2 = !this.seen2;
            }
        },

        hiden2: function() {
            if(this.secondName === '') {
                alert('Введите ник');
            }
            else {
                this.seen2 = !this.seen2;
            }
        },

        win: function() {
            if(this.sign1 === '0' && this.sign2 === '0' && this.sign3 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign4 === '0' && this.sign5 === '0' && this.sign6 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign7 === '0' && this.sign8 === '0' && this.sign9 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign1 === '0' && this.sign4 === '0' && this.sign7 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign2 === '0' && this.sign5 === '0' && this.sign8 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign3 === '0' && this.sign6 === '0' && this.sign9 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign1 === '0' && this.sign5 === '0' && this.sign9 === '0') {
                alert('Победил нолик');
            }
            else if(this.sign3 === '0' && this.sign5 === '0' && this.sign7 === '0') {
                alert('Победил нолик');
            }

            else if(this.sign1 === 'x' && this.sign2 === 'x' && this.sign3 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign4 === 'x' && this.sign5 === 'x' && this.sign6 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign7 === 'x' && this.sign8 === 'x' && this.sign9 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign1 === 'x' && this.sign4 === 'x' && this.sign7 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign2 === 'x' && this.sign5 === 'x' && this.sign8 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign3 === 'x' && this.sign6 === 'x' && this.sign9 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign1 === 'x' && this.sign5 === 'x' && this.sign9 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign3 === 'x' && this.sign5 === 'x' && this.sign7 === 'x') {
                alert('Победил крестик');
            }
            else if(this.sign1 != '' && this.sign2 != '' && this.sign3 != '' && this.sign4 != '' && this.sign5 != '' && this.sign6 != '' && this.sign7 != '' && this.sign8 != '' && this.sign9 != '') {
                alert('Ничья')
            }
        },

        move1: function() {
            if(this.zero === true) {
                this.sign1 = '0';
                this.zero = false;
            }
            else {
                this.sign1 = 'x';
                this.zero = true;
            }
        },
        move2: function() {
            if(this.zero === true) {
                this.sign2 = '0';
                this.zero = false;
            }
            else {
                this.sign2 = 'x';
                this.zero = true;
            }
        },
        move3: function() {
            if(this.zero === true) {
                this.sign3 = '0';
                this.zero = false;
            }
            else {
                this.sign3 = 'x';
                this.zero = true;
            }
        },
        move4: function() {
            if(this.zero === true) {
                this.sign4 = '0';
                this.zero = false;
            }
            else {
                this.sign4 = 'x';
                this.zero = true;
            }
        },
        move5: function() {
            if(this.zero === true) {
                this.sign5 = '0';
                this.zero = false;
            }
            else {
                this.sign5 = 'x';
                this.zero = true;
            }
        },
        move6: function() {
            if(this.zero === true) {
                this.sign6 = '0';
                this.zero = false;
            }
            else {
                this.sign6 = 'x';
                this.zero = true;
            }
        },
        move7: function() {
            if(this.zero === true) {
                this.sign7 = '0';
                this.zero = false;
            }
            else {
                this.sign7 = 'x';
                this.zero = true;
            }
        },
        move8: function() {
            if(this.zero === true) {
                this.sign8 = '0';
                this.zero = false;
            }
            else {
                this.sign8 = 'x';
                this.zero = true;
            }
        },
        move9: function() {
            if(this.zero === true) {
                this.sign9 = '0';
                this.zero = false;
            }
            else {
                this.sign9 = 'x';
                this.zero = true;
            }
        },
        play: function() {
            if(this.player === this.name) {
                this.player = this.secondName;
            }
            else {
                this.player = this.name;
            }
        }
    }
})
