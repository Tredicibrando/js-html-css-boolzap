console.log('ciao')

const app = new Vue({
    el:'#app',
    data: {
        activeContact: null,
        newMessage:'',
        contacts : [
            {
            name: 'Michele',
            avatar: 'img/_1.png',
            visible: true,
            messages: [
                {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
                },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
            }
            ],
        
            },
            {
            name: 'Fabio',
            avatar: 'img/_2.png',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
        
            },
            {
            name: 'Samuele',
            avatar: 'img/_3.png',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Luisa',
            avatar: 'img/_4.png',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            ]
        
    },
    methods: {
        selectContact: function(contact) {
            this.activeContact = contact;
        },
        getTime: function(date){
            const time = date.split(' ')[1];
            return time.substring(0,5);
        },
        sendNewMessage: function(status,text) {
            const d = new Date();
            //creare oggetto
            const message = {
                status: 'sent',
                text: this.newMessage,
                date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`,
            };
            this.activeContact.messages.push(message)
            this.newMessage = '';
            //pusho oggetto in array
            

            setTimeout(this.receiveNewMessage, 1000)
        },
        receiveNewMessage: function(){
            const d = new Date();
            //creare oggetto
            const message = {
                status: 'received',
                text: 'okay',
                date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`,
            };
            this.activeContact.messages.push(message)
        },
        
    },
    created(){
    this.selectContact(this.contacts[0]);
    },
});
