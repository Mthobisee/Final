/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author mthobisi
 */
public class Text {
    

     private Integer id;
     private String keywords;
     private String responses;

    public Text() {
    }

    public Text(String keywords, String responses) {
       this.keywords = keywords;
       this.responses = responses;
    }
   
    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    public String getKeywords() {
        return this.keywords;
    }
    
    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
    public String getResponses() {
        return this.responses;
    }
    
    public void setResponses(String responses) {
        this.responses = responses;
    }

}
