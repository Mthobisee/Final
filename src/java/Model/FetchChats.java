/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

/**
 *
 * @author mthobisi
 */
public class FetchChats {
     private static Connection conn = null;
   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
   static final String DB_URL = "jdbc:mysql://us-cdbr-azure-southcentral-f.cloudapp.net/dyname";

   //  Database credentials
   static final String USER = "b1f85ef75e7658";
   static final String PASS = "9ec9f4f5";
   
   public static Connection getConnections(){
       //Connection conn = null;
       
           try {
               Class.forName("com.mysql.jdbc.Driver");

      //STEP 3: Open a connection
      System.out.println("Connecting to database...");
      conn = DriverManager.getConnection(DB_URL,USER,PASS);

      //STEP 4: Execute a query
      
               System.out.println("Connected Successful");
           } catch (Exception e) {
               System.out.println("Cant connect");
               e.printStackTrace();
           }
           return conn;
     
   }
   public static ArrayList<Text> getAllCountriess() throws SQLException{
       conn = FetchChats.getConnections();
       ArrayList<Text> chatList = new ArrayList<Text>();
     System.out.println("Data 1");
           System.out.println("Creating statement...");
      Statement stmt = conn.createStatement();
      String sql;
      sql = "SELECT * FROM Text";
      ResultSet rs = stmt.executeQuery(sql);
           
           while(rs.next()){
               Text cat = new Text();
               cat.setKeywords(rs.getString("keywords"));
               cat.setResponses(rs.getString("responses"));
               chatList.add(cat);
           }
           System.out.println("Data ");
      
       return chatList;
   }

  
}
