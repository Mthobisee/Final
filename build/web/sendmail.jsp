<%-- 
    Document   : sendmail
    Created on : May 24, 2017, 2:58:34 PM
    Author     : mthobisi
--%>
<%@page import="javax.mail.MessagingException"%>
<%@page import="javax.mail.Transport"%>
<%@page import="javax.mail.Message"%>
<%@page import="javax.mail.internet.InternetAddress"%>
<%@page import="javax.mail.internet.MimeMessage"%>
<%@page import="javax.mail.Session"%>
<%@page import="java.util.Properties"%>
<%@page  import="Model.Members"%>
<%
    Members m = new Members();
    
    String to = "mthobisi@onepointfour.io";
    String from = m.getEmail();
    
    String host = "localhost";
    
    Properties properties = System.getProperties();
    
    properties.setProperty("mail.smtp.host", "host");
    
    Session mailSession = Session.getDefaultInstance(properties);
    
    try {
            MimeMessage message = new MimeMessage(mailSession);
            
            message.setFrom(new InternetAddress(from));
            
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            
            message.setSubject("Chatbot Test");
            
            message.setContent("<h1>This is the actual message</h1>","text/html");
            
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

%>