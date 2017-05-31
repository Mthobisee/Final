/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import com.twilio.Twilio; 
import com.twilio.rest.api.v2010.account.Message; 
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber; 

public class Sms { 
    private final static String ACCOUNT_SID = "AC026925b281ebd6dc2dfbb7de005d1450"; 
    private final static String AUTH_TOKEN = "31f50bbba5d6543650f22ecb8561787b"; 
      
    public static void main(String[] args) { 
     /*MessageCreator messageCreator = Message.creator( 
            "AC026925b281ebd6dc2dfbb7de005d1450", 
            new PhoneNumber("+27728029822") 
        ); 
    
         
        Message message = messageCreator.create(); 
        System.out.println(message.getSid()); 
    */
    } 
}