import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Button, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppFont from "../constants/AppFont.js";
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";

export default class MaintenanceScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
      return {
        title: language==='gr'?'Διάβρωση':'Corrosion',
        headerTitleStyle: commonHeaderTitleStyle,
        headerLeft: (
        <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigation.openDrawer()}>
           <Ionicons name="ios-menu" size={35} color="#483148"/>
        </TouchableOpacity>),
      };
  };

  render() {
    const { goBack } = this.props.navigation;
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
      <ScrollView>
        <Text style={styles.description}>
          {language==='gr'?'Τα υπαίθρια δημόσια γλυπτά – μνημεία είναι τοποθετημένα σε κεντρικές πλατείες και δρόμους στην πόλη της Θεσσαλονίκης. Η γειτνίαση με τη θάλασσα, το κλίμα της πόλης και η ατμοσφαιρική ρύπανση έχουν ως αποτέλεσμα την υποβάθμιση του υλικού φορέα αλλά και οπτική – αισθητική υποβάθμιση τους. Μερικοί από τους σημαντικότερους παράγοντες διάβρωσης των υπαίθριων γλυπτών και μνημείων, είναι:':'Types of deterioration:'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Νερό':'Water'}
        </Text>
        <Text style={styles.description}>
          {language==='gr'?'Το νερό σε διάφορες μορφές, αποτελεί σημαντικό παράγοντα φθοράς των μνημείων. Εισχωρεί εύκολα στις ρωγμές της πέτρας και με το φαινόμενο της τριχοειδούς αναρρίχησης, την εμποτίζει σε βάθος συμπαρασύροντας και συστατικά από το έδαφος, όπως άλατα. Σε περιόδους ξηρασίας το νερό εξατμίζεται και τα άλατα κρυσταλλώνονται προκαλώντας διάβρωση σε κεραμικά, τοιχογραφίες, πέτρες. Το φαινόμενο αυτό της κρυστάλλωσης των αλάτων παρατηρείται συχνά στα μνημεία που βρίσκονται κοντά στην θάλασσα. Το νερό της θάλασσας περιέχει άλατα, έτσι επιδρά στα δομικά υλικά των μνημείων μέσω του φαινομένου της κρυστάλλωσης των διαλυτών αλάτων που περιέχει ιδίως σε πορώδη υλικά όπως κεραμικά και πετρώματα. Με την πτώση της θερμοκρασίας και την μετατροπή του νερού σε πάγο, ασκούνται ισχυρές πιέσεις που μπορεί να οδηγήσουν στην θραύση.λοντικών παραγόντων είναι συνεχής.':'Water in various forms is an important factor in the deterioration of monuments. It easily penetrates into the cracks of the stone and with the phenomenon of capillary accession, it deeply infiltrates soil and soil components such as salts. During drought season the water evaporates and the salts crystallize causing corrosion in ceramics, frescoes, stones. This phenomenon of crystallization of salts is often observed in monuments near the sea. Sea water contains salts, so it impacts the building materials of the monuments through the phenomenon of crystallization of soluble salts, especially in duct materials such as ceramics and rocks. With the drop of temperature and the conversion of water into ice, strong pressures are created which can lead to breakage.'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Σχετική Υγρασία':'Relative humidity'}
        </Text>
        <Text style={styles.description}>
          {language==='gr'?'Η διακύμανση της σχετικής υγρασίας σε ποσοστό άνω του 70 % ευνοεί την ανάπτυξη μικροοργανισμών και μούχλας στα υγροσκοπικά υλικά, χαρτί, ύφασμα, ξύλο κ.α.. Αντίστοιχα η πτώση των επιπέδων υγρασίας προκαλεί συρρίκνωση έως και καταστροφή των υλικών αυτών. Επίσης οι συνεχείς εναλλαγές των επιπέδων υγρασίας αποδυναμώνουν τα υλικά που συνθέτουν τα έργα τέχνης και συχνά προκαλείται μη αναστρέψιμη φθορά έως και ολική καταστροφή. Γι’ αυτό το επίπεδο σχετικής υγρασίας πρέπει να διατηρείται σταθερό, ιδανικά περίπου στο 45%.':'The relative humidity variation in excess of 70% favors the growth of microorganisms and molds in humectants, paper, cloth, wood and other. Correspondingly, the drop in moisture levels causes shrinkage and destruction of these materials. Continuous variations in moisture levels also weaken the materials that produce artworks and often cause irreversible damage to total destruction. Therefore, the relative humidity level should be kept constant, ideally around 45%.'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Βιολογική Διάβρωση':'Organic Corrosion'}
        </Text>
        <Text style={styles.description}>
          {language==='gr'?'Ο βιολογικός παράγοντας είναι άλλη μια αιτία φθοράς των υπαίθριων γλυπτών, των μνημείων και των μουσειακών αντικειμένων. Ο όξινος χαρακτήρας των βιολογικών αποθέσεων (εκκριμάτων ζώων και φυτών) υποβαθμίζει την πέτρα, το τσιμεντοκονίαμα και το μάρμαρο όπως και με τη δημιουργία αποικιών φυτικής προέλευσης, λειχήνες, μικροοργανισμοί, βάκιλοι και βακτήρια.':'Biological factor is another cause of monument corrosion and museum objects. The acidic character of biological deposits (animal and plant excreta) degrades stone, cement and marble, as well as the formation of plant colonies, lichens, microorganisms, bacilli and bacteria.'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Ηλιακή Ακτινοβολία':'Solar radiation'}
        </Text>
        <Text style={styles.description}>
          {language==='gr'?'Η υπεριώδης ακτινοβολία, επιδρά στα ανόργανα υλικά, δηλαδή τα υλικά από, πηλό, γυαλί, μέταλλο, πέτρα Ο πηλός και το γυαλί αντέχουν ένταση φωτισμού μέχρι 300 lux, ενώ το μέταλλο και η πέτρα μέχρι και 500 lux. Αντίθετα τα οργανικά υλικά, δηλαδή υλικά από ξύλο, δέρμα, χαρτί, ύφασμα, έργα ζωγραφικής σε ξύλο ή μουσαμά είναι πολύ ευαίσθητα στην υπεριώδη ακτινοβολία με ανώτατο επιτρεπόμενο όριο τα 150 lux. Για την αποφυγή φωτοχημικής διάβρωσης στους μουσειακούς χώρους χρησιμοποιούνται οθόνες UV και απορροφητές UV, ενώ τα flash των φωτογραφικών μηχανών και η χρήση φωτισμού κάμερας τηλεόρασης θα πρέπει να αποφεύγονται. Η ηλιακή ακτινοβολία δημιουργεί φωτολυτικά γεγονότα υποβάθμισης των υλικών σε μοριακό επίπεδο.':'Ultraviolet radiation affects the inorganic materials, ie materials from clay, glass, metal, stone. The clay and glass can withstand light up to 300 lux, while metal and stone up to 500 lux. On the contrary, organic materials, ie wood, leather, paper, fabric, paintings on wood or canvas, are very susceptible to ultraviolet rays with a maximum permitted limit of 150 lux. To prevent photochemical corrosion in museum venues, UV screens and UV absorbers are used, and camera flash and TV camera lighting should be avoided. Solar radiation generates photolytic events of degradation of materials at the molecular level.'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Θερμοκρασιακή αυξομείωση':'Temperature variation'}
        </Text>
        <Text style={styles.description}>
          {language==='gr'?'Οι θερμοκρασιακές αυξομειώσεις προκαλούν διαστολή και συστολή στα υλικά με αποτέλεσμα να προκαλούνται ρωγματώσεις. Οι αυξομειώσεις αυτές συμβαίνουν κυρίως στα πέτρινα μνημεία που είναι εκτεθειμένα στην ηλιακή ακτινοβολία την ημέρα και στο κρύο κατά τη διάρκεια της νύχτας. Τα πετρώματα είναι κακοί αγωγοί της θερμότητας με αποτέλεσμα το εξωτερικό τους να θερμαίνεται περισσότερο από το εσωτερικό τους κι αυτή η διαφορά θερμοκρασίας αν είναι συχνή και απότομη, προκαλεί ξεφλούδισμα και σπάσιμο στο πέτρινο μνημείο. Μια ξαφνική καταιγίδα για παράδειγμα μπορεί να ρίξει απότομα την θερμοκρασία του πετρώματος που έχει θερμανθεί στον ήλιο με συνέπεια την πρόκληση ρωγμών και απολεπίσεων.':'Temperature fluctuations cause expansion and shrinkage in the materials resulting in cracks. These fluctuations occur mainly in stone monuments that are exposed to sunlight a day and cold during the night. The rocks are bad conduits of heat resulting in their outside being heated more than their interior, and this temperature difference, if frequent and steep, causes peeling and breaking on the stone monument. A sudden storm, for example, can suddenly shed the temperature of the heated rock in the sun, resulting in cracks and flakes.'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Θόρυβος':'Noise'}
        </Text>
        <Text style={styles.description}>
          {language==='gr'?'Η στάθμη θορύβου αποτελεί πολύ σημαντικό παράγοντα για την ασφάλεια των ευαίσθητων έργων τέχνης αλλά και των υπαίθριων γλυπτών, επειδή με τα ηχητικά κύματα δημιουργούνται μηχανικές τάσεις στον υλικό φορέα. Σε περιπτώσεις υψηλών συχνοτήτων μιας ηχητικής πηγής μπορεί να τεθούν σε συντονισμό τα υλικά των μουσειακών αντικειμένων ή το μνημείο, απορροφώντας μεγάλη ενέργεια, κι αυτό μπορεί να επιφέρει σημαντικές φθορές έως και καταστροφή. Βλαβερή ηχητική πηγή μπορεί να αποτελεί η πυκνή κυκλοφορία αυτοκινήτων, η ύπαρξη αεροδρομίου πλησίον μουσείων και μνημείων και οι οικοδομικές εργασίες. Επιτρεπόμενο όριο ήχου σε τέτοιους χώρους είναι τα 35- 75 dB.':'The noise level is a very important factor for the security of sensitive artworks and outdoor sculptures, because the sound waves create mechanical stresses on the carrier. In cases of high frequencies of a sound source, the materials of the museum objects or the monument can be coordinated, absorbing great energy, and this can cause significant damage to destruction. A harmful sound source can be the dense car traffic, the existence of an airport near museums and monuments, and construction work. A permissible sound level in such spaces is 35-75 dB.'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Ατμοσφαιρική Ρύπανση':'Atmospheric Pollution'}
        </Text>
        <Text style={styles.description}>
           {language==='gr'?'Η βιομηχανική ατμοσφαιρική ρύπανση είναι μια σημαντική παράμετρος φθοράς των μνημείων αφού συμβάλλει στην αύξηση του ποσοστού συγκέντρωσης του διοξειδίου του θείου, των οξειδίων του αζώτου και των αιωρούμενων σωματιδίων, προξενώντας σοβαρές φθορές στα δομικά υλικά των μνημείων (πέτρα, κονιάματα, μέταλλα). Οι ρύποι της ατμόσφαιρας είναι συνήθως σε αέρια κατάσταση, ή σε στερεή με την μορφή σωματιδίων κυρίως. Ρύπους αποτελούν πρωτίστως τα διάφορα αέρια, σκόνες, άμμος, άργιλοι, οξείδια μετάλλων, γύψος, τσιμέντο και ο καπνός από ατελή καύση ανθρακούχων ουσιών. Οι άνεμοι διατηρούν σε αιώρηση τα στερεά σωματίδια που μεταφέρονται σαν σκόνη ή σαν καπνός. Τα σωματίδια μεγαλύτερου μεγέθους δημιουργούν κυψελίδες στην επιφάνεια των μνημείων, ενώ τα μικρότερα προσκολλώνται και δημιουργούν επικαθίσεις, μαύρες από την αιθάλη, κόκκινες από τα οξείδια του σιδήρου. Αυτά επικάθονται στις επιφάνειες των μνημείων, προκαλώντας διάβρωση στα πετρώματα, τα μέταλλα, τα κονιάματα και τις τοιχογραφίες και μειώνουν την αισθητική τους αξία. Στην ατμόσφαιρα των βιομηχανικών περιοχών και των πόλεων είναι αυξημένη η συγκέντρωση διοξειδίου του άνθρακα, διοξειδίου και τριοξειδίου του θείου και οξειδίων του αζώτου. Τα αέρια αυτά με το νερό της βροχής διαλύονται και μετατρέπονται σε οξέα, οπότε και έχουμε την χαρακτηριστική όξινη βροχή. Τα αποτελέσματα της όξινης προσβολής γίνονται αντιληπτά στα γλυπτά που βρίσκονται εκτεθειμένα στη βροχή και πρωτίστως στις εξοχές, γι’ αυτό και τα χαρακτηριστικά του προσώπου αλλοιώνονται εμφανώς. Χαρακτηριστικά παραδείγματα όξινης προσβολής έχουμε στην Αθήνα και τη Ρώμη όπου η οξύτητα των βροχοπτώσεων έχει προκαλέσει ζημιά σε πολύ σημαντικά μνημεία όπως η Ακρόπολη και το Κολοσσαίο αντίστοιχα. Οι επιφάνειες των γλυπτών που δεν έρχονται σε επαφή με το νερό της βροχής, μετατρέπονται σε γύψο <B>(γυψοποίηση)</B>.':'Industrial atmospheric pollution is an important parameter in the deterioration of monuments, as it contributes to increasing the concentration of sulfur dioxide, nitrogen oxides and suspended particulates, causing serious damage to the building materials of the monuments (stone, mortar, metals). Air pollutants are usually in a gaseous state, or in solid in the form of particles in particular. Pollutants are primarily the various gases, dusts, sand, clays, metal oxides, gypsum, cement, and carbon-free smoke. The winds hold suspended solid particles transported as dust or smoke. Larger particles create alveoli on the surface of the monuments, while the smaller ones adhere to and create deposits, black from the carbon black, red from the iron oxides. These are deposited on the surfaces of the monuments, causing erosion to the rocks, metals, mortars and frescoes and reduce their aesthetic value. The concentration of carbon dioxide, dioxide and sulfur trioxide and oxides of nitrogen is increasing in the atmosphere of industrial areas and cities. These gases with the rainwater dissolve and convert to acids, so we have the characteristic acid rain. The effects of acid attack are perceptible in sculptures exposed to rain and, above all, in outdoors, so the facial features are noticeably altered. Typical examples of acid attack are in Athens and Rome, where the acidity of rainfall has caused damage to very important monuments such as the Acropolis and the Colosseum, respectively. Sculpture surfaces that do not come into contact with rainwater are converted into plaster (gypsum).'}
        </Text>
        <Text style={styles.title}>
          {language==='gr'?'Όξινη Βροχή':'Acid Rain'}
        </Text>
        <Text style={styles.description}>
           {language==='gr'?'Το νερό της βροχής επίσης, μετατρέπει το διοξείδιο του άνθρακα σε οξύ, επιδρά στο μάρμαρο και διαλύει τον ασβεστίτη των μνημείων. Μετά την βροχή αφού εξατμιστεί το νερό, δημιουργείται και πάλι ασβεστίτης με αποτέλεσμα η επιφάνεια του μαρμάρου να είναι σαν «ζαχαρωμένη» και το φαινόμενο ονομάζεται <B>ζαχαροποίηση</B> του μαρμάρου. Το αποτέλεσμα της δράσης αυτής στα μνημεία, είναι η μείωση των διαστάσεών τους, ένα με δύο εκατοστά, σε χρονικό διάστημα 2400 χρόνια. Αντίστοιχα αποτελέσματα προκαλεί και το διοξείδιο του θείου στα μάρμαρα και τα ασβεστολιθικά πετρώματα. Τα οξείδια του αζώτου που βρίσκονται κι αυτά σε μεγάλη πυκνότητα στην ρυπασμένη ατμόσφαιρα, αντιδρούν με το ασβεστολιθικό υλικό των πετρωμάτων με αποτέλεσμα την διάλυση του υλικού και την εξαφάνιση των γλυπτών λεπτομερειών. Για να αποφεύγονται το φαινόμενα αυτά ενδείκνυται η στέγαση των μνημείων όπου είναι δυνατό. Εκτός από την πέτρα και τα άλλα υλικά των μνημείων και μουσειακών αντικειμένων διαβρώνονται από τους ρύπους της ατμόσφαιρας. Έτσι λοιπόν τα μέταλλα οξειδώνονται, με αποτέλεσμα την απώλεια μάζας τους. Ο σίδηρος διαβρώνεται περισσότερο από κάθε άλλο μέταλλο. Ο χαλκός παρουσιάζει διαδοχικά στρώματα διάβρωσης που εμφανίζουν διαφορετικά χρώματα, κόκκινο, μπλε και πράσινο. Ο άργυρος δέχεται σημαντική επίδραση από το υδρόθειο κυρίως σε περιβάλλον υψηλής υγρασίας.':'Rainwater also converts carbon dioxide into acid, effects marble and dissolves the calcite of the monuments. After the rain evaporates the water, calcite is again created, resulting in the surface of the marble being "candied" and the phenomenon is called saccharification of the marble. The effect of this action on the monuments is to reduce their dimensions, one by two centimeters, over a period of 2400 years. Sulfur dioxide also produces similar effects on marbles and calcareous rocks. Nitrogen oxides, also found in high density in the polluted atmosphere, react with limestone rock material, resulting in the dissolution of the material and the disappearance of detail sculptures. In order to avoid these phenomena, it is advisable to accommodate the monuments wherever possible. In addition to stone and other materials of monuments and museum objects are eroded by the pollutants of the atmosphere. So the metals are oxidized, resulting in their mass loss. Iron is eroded more than any other metal. Copper shows successive layers of corrosion that display different colors, red, blue and green. Silver has a significant effect on hydrogen sulfide, especially in a high humidity environment.'}
        </Text>

        <View style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#ddd',
        }}>
        <Text style={styles.imageTitle}>
          {language==='gr'?'Όξινη βροχή και γυψοποίηση':'Acid rain and plaster'}
        </Text>
        <Image
          style={styles.Image}
          source={require('../assets/images/maintenance1.png')}
        />

        <Text style={[styles.imageTitle,{textAlign:"center"}]}>
          {language==='gr'?'Eπικαθήσεις αιθάλης (καυσαέρια και προιόντα βουλκανισμού)':'Smoke extraction (exhaust and curing products)'}
        </Text>
        <Image
          style={styles.Image}
          source={require('../assets/images/maintenance3.png')}
        />

        <Text style={styles.imageTitle}>
          {language==='gr'?'Βιοδιάβρωση (λειχήνες και μύκητες)':'Biodegradation (lichens and fungi)'}
        </Text>
        <Image
          style={styles.Image}
          source={require('../assets/images/maintenance2.png')}
        />
        <Image
          //style={styles.Image}
          style={styles.Image}
          source={require('../assets/images/maintenance4.png')}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   Image: {
     resizeMode:"contain"
   },
   title: {
     fontFamily: AppFont,
     fontSize: 16,
     paddingTop:20,
     paddingLeft:10,
     fontWeight: 'bold',
   },
   description: {
     fontFamily: AppFont,
     fontSize: 17,
     padding:10,
     textAlign: 'justify',
   },
   imageTitle: {
     fontFamily: AppFont,
     fontSize: 17,
     paddingTop:20,
     paddingLeft:10,
     fontStyle: 'italic',
   },

 });
