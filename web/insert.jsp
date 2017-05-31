<%-- 
    Document   : insert.jsp
    Created on : May 11, 2017, 12:20:47 PM
    Author     : mthobisi
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.*"%>


Mail 
<%
            
         String dbURL = "jdbc:mysql://us-cdbr-azure-southcentral-f.cloudapp.net/dyname";
         String dbUser = "b1f85ef75e7658";
         String dbPass = "9ec9f4f5";
     
        String email = request.getParameter("email");    
        String cell = request.getParameter("cellNum");
        String pwd = request.getParameter("pass");
        String name = request.getParameter("name");
        
        
        String connectionUrl = "jdbc:mysql://us-cdbr-azure-southcentral-f.cloudapp.net/dyname";
        Connection conn = null; // connection to the database
  
        PreparedStatement statement =  null;
     
        Class.forName("com.mysql.jdbc.Driver").newInstance();
       
        int updateQuery = 0;
        
        if(email != null && cell != null && pwd != null){
           if(email != "" && cell != "" && pwd != ""){
               try{
                   System.out.print("Here 0");
                   conn = DriverManager.getConnection(connectionUrl,"b1f85ef75e7658","9ec9f4f5");
                   String queryString = "INSERT INTO Members (cell_number,email,pass,name) values (?, ?, ?,?)";
                   System.out.print("Here 1");
                   statement = conn.prepareStatement(queryString);
                   
                   System.out.print("Here 3");
                   
                   statement.setString(1, cell);
                   statement.setString(2, email);
                   statement.setString(3, pwd);
                   statement.setString(4, name);
                   
                   System.out.print("Here 4");
                   
                   statement.setString(1, cell);
                   statement.setString(2, email);
                   statement.setString(3, pwd);
                   
                
                   
                   System.out.print("Here 5");
                   
                   statement.executeUpdate();
                   
                   if(updateQuery != 0){%>
                   
                   <br>
                   <script>
                       
                       alert("You are successully registered <a href='index_1.jsp'>Login Here</a>");
                   </script>
                  
                   <%
                   
                   }
                   response.sendRedirect("index_1.jsp");
                    
                  
                   
               }catch(Exception ex){
                    out.println("Unable to register");
               }
               finally{
                    statement.close();
                    conn.close();
                }
            }
        }

%>
        