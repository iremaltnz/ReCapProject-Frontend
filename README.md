#  ReCapProject-Frontend

   Kullanıcı kayıt olurken şifrenin en az 8 karakter olması kuralı getirildi ve custom directive yapısı kullanılarak eğer 8 karakterden az giriş yapılmışsa background rengi değiştirilerek kullanıcı uyarıldı.
  
   Register için kullanılan formda password girişi için custom form control yapısı kullanıldı.
   
 
![şifrekarakterhata](https://user-images.githubusercontent.com/55363753/114248755-31401600-99a1-11eb-9f21-09c892e900c9.png)
![şifrekarakteronay](https://user-images.githubusercontent.com/55363753/114248757-32714300-99a1-11eb-98f4-fa91320eb43b.png)


 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Login/Register yetenekleri getirildi.

![login](https://user-images.githubusercontent.com/55363753/114108220-52d6ca00-98db-11eb-8204-e12100f5634e.png)
![register](https://user-images.githubusercontent.com/55363753/114108254-62561300-98db-11eb-92ee-86a98dcf90e4.png)

 Kiralama esnasında müşterinin findeks puanını sorgulayacak sahte servis eklendi.
 Bu puanı olmayan müşteriler araç kiralama işlemi gerçekleştiremez.
 
 ![findex-car](https://user-images.githubusercontent.com/55363753/114108258-63874000-98db-11eb-982f-30f7f9fcc7ca.png)
 ![findexyetersiz](https://user-images.githubusercontent.com/55363753/114108260-641fd680-98db-11eb-859f-5e2a377de893.png)
 
 LocalStorage için servis yazıldı.
 
 Giriş ve register için nav'a butonlar eklendi.
 Eğer giriş yapılmamışsa nav'da bu butonlar oldu. Giriş yapılmışsa bu butonlar yerine müşteri adı  yazıldı.
 
 ![butonlar](https://user-images.githubusercontent.com/55363753/114108500-de505b00-98db-11eb-898a-c3865650b954.png)
 ![giriş-butonlar](https://user-images.githubusercontent.com/55363753/114108240-5b2f0500-98db-11eb-8ee8-1bb9a2a5c517.png)
 
 Kullanıcı bilgilerini görüp güncelleyebilmekte.
 
 ![profil](https://user-images.githubusercontent.com/55363753/114108261-65510380-98db-11eb-9426-8e722cb7a161.png)
 ![kullanıcıbilgigüncelleme](https://user-images.githubusercontent.com/55363753/114108250-61bd7c80-98db-11eb-9303-0619017bb6aa.png)
 ![bilgigüncellemeonay](https://user-images.githubusercontent.com/55363753/114108596-0d66cc80-98dc-11eb-8bde-e82004ce241b.png)
 
 Kredi kartıyla ödeme alındığında kullanıcıya kredi kartını kaydedelim mi? Sorusu yöneltildi.
 Kaydetmek isteyen müşteriye sonraki ödemede kayıtlı kredi kartını gösterildi.
 
 ![kartkayıt](https://user-images.githubusercontent.com/55363753/114108251-61bd7c80-98db-11eb-8a87-75ed8a819e8d.png)
 ![kartkayıtonay](https://user-images.githubusercontent.com/55363753/114108255-62eea980-98db-11eb-9fef-780f5431a220.png)
 
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Custom Error Middleware eklendi fluent validation için refactoring yapıldı.
Toast desteği verildi.

![Middleware validation](https://user-images.githubusercontent.com/55363753/113518223-99e85680-958d-11eb-907c-82f79b7601df.png)

Brand, Color, Car Ekleme sayfaları oluşturuldu.


![brandlist](https://user-images.githubusercontent.com/55363753/113518217-981e9300-958d-11eb-9dbb-8487543f7203.png)
![brandadd](https://user-images.githubusercontent.com/55363753/113518216-9785fc80-958d-11eb-878f-480c547e9a3f.png)
![markaeklemeonay](https://user-images.githubusercontent.com/55363753/113518219-98b72980-958d-11eb-883a-aaf657264eaf.png)

![renk ekleme](https://user-images.githubusercontent.com/55363753/113518225-9b198380-958d-11eb-8279-04553795c74b.png)
![renk ekleme onay](https://user-images.githubusercontent.com/55363753/113518224-9a80ed00-958d-11eb-8678-264b7ebeb223.png)

![arabaekleme](https://user-images.githubusercontent.com/55363753/113518229-9d7bdd80-958d-11eb-9bfe-21f1a5c4f0f7.png)
![arabaekleme onay](https://user-images.githubusercontent.com/55363753/113518228-9ce34700-958d-11eb-88e2-52214c5c5790.png)


Brand,Color,Car listesinde güncelleme sayfaları oluşturuldu

![arabagüncelleme](https://user-images.githubusercontent.com/55363753/113518230-9e147400-958d-11eb-961a-0f72d1bab2f9.png)
![arabagüncellemeonay](https://user-images.githubusercontent.com/55363753/113518214-9654cf80-958d-11eb-9880-38f161b1793c.png)

![markagüncelleme](https://user-images.githubusercontent.com/55363753/113518220-98b72980-958d-11eb-99cf-12cdb1c5e2fb.png)
![markagüncellemeonay](https://user-images.githubusercontent.com/55363753/113518222-994fc000-958d-11eb-9879-043885eed87e.png)

![renkgüncelleme](https://user-images.githubusercontent.com/55363753/113518227-9bb21a00-958d-11eb-84dc-8fe902b37c58.png)
![renk güncelleme onay](https://user-images.githubusercontent.com/55363753/113518226-9bb21a00-958d-11eb-92bd-07e083fd3b35.png)



Car, Brand, Color için pipe ile arama desteği eklendi.

![arabaarama (2)](https://user-images.githubusercontent.com/55363753/113459421-207e2600-941e-11eb-8d81-bfcbdcbcdc0d.png)
![renkfiltre](https://user-images.githubusercontent.com/55363753/113459415-1eb46280-941e-11eb-8f38-f75162f57ea0.png)
![markafiltre](https://user-images.githubusercontent.com/55363753/113459411-1d833580-941e-11eb-90cc-6e80e80673e6.png)

Araba filtreleme işlemi yapıldı.

![filtre1](https://user-images.githubusercontent.com/55363753/113459424-2116bc80-941e-11eb-8ea9-51d5eef07ccc.png)
![filtre2](https://user-images.githubusercontent.com/55363753/113459425-21af5300-941e-11eb-8817-aec4d82e5af3.png)

Kiralama sistemi yazıldı , araba o tarihlerde kiralı ise kiralama işlemi yapılmadı, Eğer tarihler uygunsa ödeme opsiyonu getirildi.

![tarih onay](https://user-images.githubusercontent.com/55363753/113459416-1f4cf900-941e-11eb-8c9f-eeff357b6233.png)
![tarihonayıyok](https://user-images.githubusercontent.com/55363753/113459417-1fe58f80-941e-11eb-8cf2-b22252e59f04.png)

Kredi kartıyla ödeme seçeneği getirildi sahte bir banka servisi yazıldı.Yanlış kart bilgisi girildiğinde işlem iptal edildi.



![ödeme onay](https://user-images.githubusercontent.com/55363753/113459412-1d833580-941e-11eb-83ad-2c2651c56260.png)
![kiralamabilgisi](https://user-images.githubusercontent.com/55363753/113459408-1c520880-941e-11eb-9761-cc7c03143ab0.png)
![ödeme onayı yok](https://user-images.githubusercontent.com/55363753/113459413-1e1bcc00-941e-11eb-93d5-e1c74e7469e2.png)
