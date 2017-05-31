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
public class Members {
      private Integer uid;
     private String cellNumber;
     private String email;
     private String pass;
     private String name;

    public Members() {
    }

    public Members(String cellNumber, String email, String pass,String name) {
       this.cellNumber = cellNumber;
       this.email = email;
       this.pass = pass;
       this.name = name;
    }
   
    public Integer getUid() {
        return this.uid;
    }
    
    public void setUid(Integer uid) {
        this.uid = uid;
    }
    public String getCellNumber() {
        return this.cellNumber;
    }
    
    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
    }
    public String getEmail() {
        return this.email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPass() {
        return this.pass;
    }
    
    public void setPass(String pass) {
        this.pass = pass;
    }

 public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.pass = name;
    }

    
}
